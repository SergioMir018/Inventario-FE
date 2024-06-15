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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISinUpForm>();

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
        htmlFor='name'
        className='text-white font-gabarito group-hover:text-black transition-colors duration-150 ease-in-out'
      >
        Nombre
      </label>
      <div className='mb-3'>
        <CustomInput
          {...register('name', { required: 'Nombre requerido' })}
          type='text'
          isInvalid={errors.name ? true : false}
          errorMessage={errors.name?.message}
        />
      </div>
      <label
        htmlFor='email'
        className='text-white font-gabarito group-hover:text-black transition-colors duration-150 ease-in-out'
      >
        Email
      </label>
      <div className='mb-3'>
        <CustomInput
          {...register('email', {
            required: 'Email requerido',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Email inválido',
            },
          })}
          type='text'
          isInvalid={errors.email ? true : false}
          errorMessage={errors.email?.message}
        />
      </div>
      <label
        htmlFor='password'
        className='text-white font-gabarito group-hover:text-black transition-colors duration-150 ease-in-out'
      >
        Contraseña
      </label>
      <div className='mb-3'>
        <CustomInput
          {...register('password', {
            required: 'Contraseña requerida',
            minLength: { value: 4, message: 'Al menos 4 caractéres' },
            maxLength: { value: 32, message: 'Máximo 32 caractéres' },
          })}
          type='password'
          isInvalid={errors.password ? true : false}
          errorMessage={errors.password?.message}
        />
      </div>
      <FormButton
        text='Crear cuenta'
        useSubmit={true}
      />
    </form>
  );
}
