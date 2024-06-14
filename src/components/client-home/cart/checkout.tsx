import PopUp from '../../shared/pop-up';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../../icons/close-icon';
import Divider from '../../shared/divider';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import { CartContext } from '../../../context/cart-context';
import { useUserId } from '../../../hooks/useUserId';
import axios from 'axios';
import { BASE_URL } from '../../../types/constants';
import { OrderProduct } from '../../../types/http-types';

interface ICheckoutForm {
  city: string;
  municipality: string;
  partAdress: string;
  card: string;
  phone: number;
}

export default function Checkout() {
  const navigate = useNavigate();

  const userId = useUserId();

  const cartContext = useContext(CartContext);

  const { register, handleSubmit } = useForm<ICheckoutForm>();

  const confirmCheckoutAction: SubmitHandler<ICheckoutForm> = async (
    data: ICheckoutForm
  ) => {
    if (cartContext) {
      const cartContent: OrderProduct[] = cartContext.cart.map((item) => {
        return {
          productId: item.itemId,
          quantity: item.quantity,
        };
      });

      const shippingAddres = `${data.city}, ${data.municipality}, ${data.partAdress}`;
      const creationDate = new Date().toISOString().split('T')[0];

      const requestData = {
        clientID: userId,
        creationDate: creationDate,
        totalPayment: cartContext.calculateTotal(),
        details: {
          shippingAddress: shippingAddres,
          billingAddress: data.card,
          phoneNumber: data.phone,
        },
        products: cartContent,
      };

      try {
        const response = await axios.post(
          `${BASE_URL}/order/create`,
          requestData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        console.log('Orden creada con exito:', response.data);
        navigate('cart');
      } catch (error) {
        console.error('Error al crear la orden:', error);
      }
    }
  };

  const handleClosePopUpClick = () => {
    navigate('cart');
  };

  return (
    <PopUp>
      <div className=' w-[35rem] bg-dark rounded-md flex flex-col justify-between'>
        <div className='w-full flex justify-end mt-2 pr-2'>
          <button
            className='w-6 h-6'
            onClick={handleClosePopUpClick}
          >
            <CloseIcon />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(confirmCheckoutAction)}
          className='w-full h-[95%] px-5 pb-5 flex flex-col'
        >
          <h1 className='text-2xl font-gabarito-bold'>Completa el checkout</h1>
          <p className='text-white/60'>
            Agrega tu información de envio y método de pago
          </p>
          <Divider text='Envío' />
          <label className='text-white font-gabarito'>Ciudad</label>
          <input
            {...register('city')}
            type='text'
            className='w-full p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
          />
          <label className='text-white font-gabarito pt-5'>Municipio</label>
          <input
            {...register('municipality')}
            type='text'
            className='w-full p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
          />
          <label className='text-white font-gabarito pt-5'>
            Dirección particular
          </label>
          <input
            {...register('partAdress')}
            type='text'
            className='w-full p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
          />
          <Divider text='Pago' />
          <label className='text-white font-gabarito'>Tarjeta de banca</label>
          <input
            {...register('card')}
            type='text'
            className='w-full p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
          />
          <Divider text='Contacto' />
          <label className='text-white font-gabarito'>Teléfono</label>
          <input
            {...register('phone')}
            type='text'
            className='w-full p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
          />
          <button
            type='submit'
            className='bg-white text-black mt-5 py-2 font-gabarito-bold rounded-md hover:bg-white/80 transition duration-100'
          >
            Completar
          </button>
        </form>
      </div>
    </PopUp>
  );
}
