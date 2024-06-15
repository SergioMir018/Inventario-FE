import { SubmitHandler, useForm } from 'react-hook-form';
import FormButton from './form-button';
import axios from 'axios';
import { BASE_URL } from '../../types/constants';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';
import { CustomInput } from '../shared/custom-input';

interface ISinUpForm {
  name: string;
  email: string;
  password: string;
}

export default function SingUpForm() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const { register, handleSubmit } = useForm<ISinUpForm>();

  const singUpFormAction: SubmitHandler<ISinUpForm> = async (
    data: ISinUpForm
  ) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/create`,
        {
          name: data.name,
          email: data.email,
          password: data.password,
          role: 'client',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const id = response.data;

      authContext?.setIsAdmin(false);
      authContext?.setRole('client');

      navigate(`/id=${id}/client/home/shop`, { replace: true });
    } catch (error) {
      console.error('Sing Up error:', error);
    }
  };

  return (
    <form
      className='w-full'
      onSubmit={handleSubmit(singUpFormAction)}
    >
      <label
        htmlFor='loginNameOrEmail'
        className='text-white font-gabarito group-hover:text-black transition-colors duration-150 ease-in-out'
      >
        Nombre
      </label>
      <CustomInput
        {...register('name')}
        type='text'
      />
      <label
        htmlFor='loginNameOrEmail'
        className='text-white font-gabarito group-hover:text-black transition-colors duration-150 ease-in-out'
      >
        Email
      </label>
      <CustomInput
        {...register('email')}
        type='email'
      />
      <label
        htmlFor='loginNameOrEmail'
        className='text-white font-gabarito group-hover:text-black transition-colors duration-150 ease-in-out'
      >
        Contraseña
      </label>
      <CustomInput
        {...register('password')}
        type='password'
      />
      <FormButton
        text='Crear cuenta'
        useSubmit={true}
      />
    </form>
  );
}
