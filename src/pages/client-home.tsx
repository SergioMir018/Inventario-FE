import { useContext } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Checkout from '../components/client-home/cart/checkout';
import Footer from '../components/client-home/footer';
import Navbar from '../components/client-home/navbar';
import { CartContext } from '../context/cart-context';
import { useUserId } from '../hooks/useUserId';
import SinUoRequest from '../components/client-home/sing-up-request';

export default function ClientHome() {
  const location = useLocation();

  const id = useUserId();

  const cartContext = useContext(CartContext);

  cartContext?.setCanShop(id !== 'guest');

  const isCheckoutRoute = location.pathname.includes('checkout');
  const isSingUpRequestRoute = location.pathname.includes('singUpRequest');

  return (
    <main className='w-full min-h-screen flex flex-col justify-between text-white'>
      {isCheckoutRoute && <Checkout />}
      {isSingUpRequestRoute && <SinUoRequest />}
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
