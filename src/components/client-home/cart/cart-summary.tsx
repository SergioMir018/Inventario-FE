import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../context/cart-context';
import { useNavigate } from 'react-router-dom';

export default function CartSummary() {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartContext) {
      setTotal(cartContext.calculateTotal());
    }
  }, [cartContext, cartContext?.cart]);

  const checkoutAction = () => {
    navigate('checkout');
  };

  return (
    <div className='w-full rounded-md flex justify-between my-4 px-2'>
      <div className='flex flex-col mt-auto'>
        <h3 className='font-gabarito-medium text-xl'>Total</h3>
        <p className='font-gabarito-bold text-4xl'>${total.toFixed(2)}</p>
      </div>
      <button onClick={checkoutAction} className='bg-white text-black h-14 w-48 mt-auto text-xl font-gabarito-medium rounded-md hover:bg-white/80 transition duration-100'>Checkout</button>
    </div>
  );
}
