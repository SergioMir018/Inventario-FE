import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../icons/close-icon';
import PopUp from '../shared/pop-up';

export default function SingUpRequest() {
  const navigate = useNavigate();

  const closeSingUpRequest = () => {
    navigate(-1);
  };

  const registerButtonAction = () => {
    navigate('/session');
  };

  return (
    <PopUp>
      <div className='w-[35rem] px-5 bg-dark rounded-md flex flex-col justify-between'>
        <div className='w-full flex justify-end my-3'>
          <button
            onClick={closeSingUpRequest}
            className='w-6 h-6'
          >
            <CloseIcon />
          </button>
        </div>
        <h1 className='text-2xl text-center'>
          Para acceder a esta funcionalidad debe estar registrad@
        </h1>
        <button
          type='button'
          onClick={registerButtonAction}
          className='bg-white w-full mb-5 text-black text-xl mt-5 py-2 font-gabarito-bold rounded-md hover:bg-white/80 transition duration-100'
        >
          Registrarse
        </button>
      </div>
    </PopUp>
  );
}
