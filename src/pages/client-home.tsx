import { useLocation, Outlet } from 'react-router-dom';
import Checkout from '../components/client-home/cart/checkout';
import Footer from '../components/client-home/footer';
import Navbar from '../components/client-home/navbar';
import SingUpRequest from '../components/client-home/sing-up-request';

export default function ClientHome() {
  const location = useLocation();

  const isCheckoutRoute = location.pathname.includes('checkout');
  const isSingUpRequestRoute = location.pathname.includes('singUpRequest');

  return (
    <main className='w-full min-h-screen flex flex-col justify-between text-white'>
      {isCheckoutRoute && <Checkout />}
      {isSingUpRequestRoute && <SingUpRequest />}
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
