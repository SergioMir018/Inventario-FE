import { useState } from 'react';
import LoginForm from './login-form';
import SectionButton from './section-button';
import SingUpForm from './sing-up-form';
import { useNavigate } from 'react-router-dom';
import FormButton from './form-button';

export default function Form() {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleButtonClick = (index: number) => {
    setClickedIndex(index);
  };

  const handleGestButtonClick = () => {
    const id = 'gest';
    navigate(`/id=${id}/client/home/shop`);
  };

  return (
    <section className='flex flex-col absolute w-full sm:w-72 justify-center items-center gap-3 z-10'>
      <h1 className='inline-block text-white text-5xl mr-0 font-gabarito-medium group-hover:text-black transition-colors duration-150 ease-in-out'>
        Bienvenid@
      </h1>
      <p className='text-white font-gabarito-medium w-full text-center group-hover:text-black transition-colors duration-150 ease-in-out'>
        Inicia sesión, loggeate o entra como invitado para empezar
      </p>
      <div className='w-screen justify-center flex gap-4'>
        <SectionButton
          text='Crear cuenta'
          isClicked={clickedIndex === 0}
          onClick={() => handleButtonClick(0)}
        />
        <SectionButton
          text='Iniciar sesión'
          isClicked={clickedIndex === 1}
          onClick={() => handleButtonClick(1)}
        />
        <SectionButton
          text='Visitante'
          isClicked={clickedIndex === 2}
          onClick={() => handleButtonClick(2)}
        />
      </div>
      {clickedIndex === 0 && <SingUpForm />}
      {clickedIndex === 1 && <LoginForm />}
      {clickedIndex === 2 && (
        <div className='w-full'>
          <p className='text-white my-5 font-gabarito-medium w-full text-center flex justify-center group-hover:text-black transition-colors duration-150 ease-in-out'>
            Continua como invitado para explorar la nuestra web sin iniciar
            sesión
          </p>
          <FormButton
            text='Continua como Invitado'
            action={handleGestButtonClick}
          />
        </div>
      )}
    </section>
  );
}
