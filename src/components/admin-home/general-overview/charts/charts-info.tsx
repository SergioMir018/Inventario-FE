import SalesChart from './sales-chart.tsx';
import ProductsDonut from './products-donut.tsx';
import TopProducts from '../top-products.tsx';
import { Order } from '../../../../types/http-types.ts';

interface ChartsInfoProps {
  orders: Order[];
}

export default function ChartsInfo({orders}: ChartsInfoProps) {
  return (
    <section
      className='grid grid-cols-4 w-full
    mt-7 gap-7'
    >
      <SalesChart orders={orders} />
      <ProductsDonut />
      <TopProducts />
    </section>
  );
}
