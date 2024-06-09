import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/client-home/navbar';
import Footer from '../components/client-home/footer';
import Checkout from '../components/client-home/cart/checkout';
import { useUserId } from '../hooks/useUserId';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';

export default function ClientHome() {
  
  const location = useLocation();

  const id = useUserId();

  const cartContext = useContext(CartContext);

  cartContext?.setCanShop(id !== 'gest');

  const isCheckoutRoute = location.pathname.includes('/checkout');

  return (
    <main className='w-full min-h-screen flex flex-col justify-between text-white'>
      {isCheckoutRoute && <Checkout />}
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
