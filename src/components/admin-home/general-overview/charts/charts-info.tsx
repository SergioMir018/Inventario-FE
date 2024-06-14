import SalesChart from './sales-chart.tsx';
import ProductsDonut from './products-donut.tsx';
import TopProducts from '../top-products.tsx';
import { Category, Order, Product } from '../../../../types/http-types.ts';

interface ChartsInfoProps {
  orders: Order[];
  products: Product[];
  categories: Category[];
}

export default function ChartsInfo({ orders, products, categories }: ChartsInfoProps) {
  return (
    <section
      className='grid grid-cols-4 w-full
    mt-7 gap-7'
    >
      <SalesChart orders={orders} />
      <ProductsDonut
        products={products}
        categories={categories}
        orders={orders}
      />
      <TopProducts orders={orders} products={products} />
    </section>
  );
}
