import FormButton from './form-button';
import { useForm, SubmitHandler } from 'react-hook-form';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { HTTPLogin, HTTPLoginError } from '../../types/http-types';
import { BASE_URL } from '../../types/constants';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';
import { CustomInput } from '../shared/custom-input';

interface ILoginForm {
  identifier: string;
  password: string;
}

export default function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILoginForm>();

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

          const response = await axios.post(
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

          console.log(response.data);
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

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
    } catch (error: AxiosError) {
      if (error.response?.data?.reason) {
        const loginError: HTTPLoginError = error.response.data;

        if (loginError.errorType === 'user') {
          setError('identifier', {
            type: 'value',
            message: 'Usuario no encontrado',
          });
        } else if (loginError.errorType === 'password') {
          setError('password', {
            type: 'value',
            message: 'Contraseña incorrecta',
          });
        } else {
          console.error('Login error:', loginError);
        }
      }
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
      <div className='mb-3'>
        <CustomInput
          {...register('identifier', {
            required: 'Nombre o Email es requerido',
          })}
          type='text'
          isInvalid={errors.identifier ? true : false}
          errorMessage={errors.identifier?.message}
        />
      </div>
      <label
        htmlFor='loginPassword'
        className='text-white font-gabarito group-hover:text-black transition-colors duration-150 ease-in-out'
      >
        Contraseña
      </label>
      <div className='mb-3'>
        <CustomInput
          {...register('password', { required: 'Contraseña es requerida' })}
          type='password'
          isInvalid={errors.password ? true : false}
          errorMessage={errors.password?.message}
        />
      </div>
      <FormButton
        text='Login'
        useSubmit={true}
      />
    </form>
  );
}
