import FormButton from './form-button';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { HTTPLogin } from '../../types/http-types';
import { BASE_URL } from '../../types/constants,';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

interface ILoginForm {
  identifier: string;
  password: string;
}

export default function LoginForm() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<ILoginForm>();
  const authContext = useContext(AuthContext);
  const location = useLocation();

  const loginFormAction: SubmitHandler<ILoginForm> = async (
    data: ILoginForm
  ) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, null, {
        params: {
          q: data.identifier,
          p: data.password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { id, role }: HTTPLogin = response.data;

      if (role === 'client') {
        authContext?.setRole('client');
        authContext?.setIsAdmin(false);

        try {
          const visitDate = new Date().toISOString().split('T')[0];

          await axios.post(
            `${BASE_URL}/user/visit`,
            {
              url: location.pathname,
              date: visitDate,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

        } catch (e) {
          console.log(e);
        }

        navigate(`/id=${id}/client/home/shop`, { replace: true });
      } else {
        authContext?.setRole(role);

        role === 'admin'
          ? authContext?.setIsAdmin(true)
          : authContext?.setIsAdmin(false);

        navigate(`/id=${id}/${role}`, { replace: true });
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form
      className='w-full'
      onSubmit={handleSubmit(loginFormAction)}
    >
      <label
        htmlFor='loginNameOrEmail'
        className='text-white font-gabarito group-hover:text-black transition-colors duration-150 ease-in-out'
      >
        Nombre o Email
      </label>
      <input
        {...register('identifier')}
        type='text'
        className='w-full p-1 font-gabarito outline-none ring ring-black/50 focus:ring focus:ring-black mt-1 mb-2 rounded-sm'
      />
      <label
        htmlFor='loginNameOrEmail'
        className='text-white font-gabarito group-hover:text-black transition-colors duration-150 ease-in-out'
      >
        Contraseña
      </label>
      <input
        {...register('password')}
        type='text'
        className='w-full p-1 font-gabarito outline-none ring ring-black/50 focus:ring focus:ring-black mt-1 mb-5 rounded-sm'
      />
      <FormButton
        text='Login'
        useSubmit={true}
      />
    </form>
  );
}
