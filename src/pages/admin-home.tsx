import AdminMenu from '../components/shared/admin-menu';
import HeaderHeadline from '../components/shared/header-headline';
import TopHeader from '../components/shared/top-header';
import UserOpts from '../components/shared/user-opts';
import { Outlet, useLocation } from 'react-router-dom';
import AddProductForm from '../components/admin-home/products/add-product-form';
import ProductDetails from '../components/admin-home/products/product-details';
import { useProductId } from '../hooks/useProductId';
import ProductEdit from '../components/admin-home/products/product-edit';
import OrderDetails from '../components/admin-home/orders/order-details';
import { useOrderId } from '../hooks/useOrderId';

export default function AdminHome() {
  const productParamsId = useProductId();
  const [order, client] = useOrderId();

  const location = useLocation();

  const isAddProductRoute = location.pathname.includes('addProduct');
  const isProductDetailRoute = location.pathname.includes('details/productId');
  const isProductEditRoute = location.pathname.includes('edit/productId');
  const isOrderDetailsPage = location.pathname.includes('orderId');

  return (
    <section className='flex min-w-screen min-h-screen'>
      {isAddProductRoute && <AddProductForm />}
      {isProductDetailRoute && <ProductDetails id={productParamsId} />}
      {isProductEditRoute && <ProductEdit id={productParamsId} />}
      {isOrderDetailsPage && <OrderDetails orderId={order} clientId={client} />}
      <header
        className='flex flex-col gap-1 pl-10 pt-5 my-[3rem] min-w-[15rem]
        border-r-2 border-white/10'
      >
        <HeaderHeadline />
        <AdminMenu />
        <UserOpts />
      </header>
      <main className='w-screen ml-[5rem] mr-[5rem] mt-[3rem]'>
        <TopHeader />
        <Outlet />
      </main>
    </section>
  );
}
