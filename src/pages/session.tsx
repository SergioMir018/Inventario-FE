import { useContext, useEffect } from 'react';
import Blob from '../assets/Blob';
import Form from '../components/session/sessions-form';
import { CartContext } from '../context/cart-context';

export default function Session() {

  const cartContext = useContext(CartContext)

  useEffect(() => {
    cartContext?.setCart([])
  }, [cartContext])

  return (
    <section className='flex overflow-hidden justify-center items-center max-w-screen min-h-screen'>
      <div className='group flex justify-center items-center'>
        <Form />
        <Blob />
      </div>
    </section>
  );
}
