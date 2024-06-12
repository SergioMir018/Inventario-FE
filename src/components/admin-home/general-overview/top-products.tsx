import { useMemo, useState } from 'react';
import { Category, Order, Product } from '../../../types/http-types.ts';
import ProductsSearch from './products-search.tsx';
import TopProductsCategories from './top-products-categories.tsx';
import TopProductsItem from './top-products-item.tsx';
import { TopProduct } from '../../../types/products.ts';

interface TopProductsProps {
  orders: Order[];
  products: Product[];
}

export default function TopProducts({ orders, products }: TopProductsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [period, setPeriod] = useState('Todo el tiempo');

  const filterOrdersByPeriod = (orders: Order[], period: string) => {
    const now = new Date();

    return orders.filter((order) => {
      const orderDate = new Date(order.creationDate);

      switch (period) {
        case 'Este día':
          return (
            orderDate.getDate() + 1 === now.getDate() &&
            orderDate.getMonth() === now.getMonth() &&
            orderDate.getFullYear() === now.getFullYear()
          );
        case 'Esta semana':
          // eslint-disable-next-line no-case-declarations
          const startOfWeek = new Date(now);
          startOfWeek.setDate(now.getDate() - now.getDay());
          // eslint-disable-next-line no-case-declarations
          const endOfWeek = new Date(startOfWeek);
          endOfWeek.setDate(startOfWeek.getDate() + 7);
          return orderDate >= startOfWeek && orderDate <= endOfWeek;
        case 'Este mes':
          return (
            orderDate.getMonth() === now.getMonth() &&
            orderDate.getFullYear() === now.getFullYear()
          );
        case 'Este año':
          return orderDate.getFullYear() === now.getFullYear();
        default:
          return true;
      }
    });
  };

  const topProducts: TopProduct[] = useMemo(() => {
    const productSales: {
      [key: string]: { product: Product; quantity: number };
    } = {};

    const filteredOrders = filterOrdersByPeriod(orders, period);

    filteredOrders.forEach((order) => {
      order.products.forEach((item) => {
        const product = products.find((prod) => prod.id === item.productId);
        if (product) {
          if (!productSales[product.id]) {
            productSales[product.id] = { product, quantity: 0 };
          }
          productSales[product.id].quantity += item.quantity;
        }
      });
    });

    const filteredProducts = Object.values(productSales).filter(({ product }) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = filteredProducts
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 10);

    return sortedProducts;
  }, [orders, products, searchTerm, period]);

  return (
    <section className='col-span-4 bg-dark w-full h-96 rounded-xl px-6 py-4 text-white overflow-hidden'>
      <div className='flex justify-between items-center w-full'>
        <h2 className='text-2xl font-gabarito-bold'>Productos top 10</h2>
        <ProductsSearch onSearchChange={setSearchTerm} setPeriod={setPeriod} />
      </div>
      <div className='w-full h-72 overflow-y-auto mt-8 pr-5 pb-10'>
        <TopProductsCategories />
        {topProducts.map((topProduct) => (
          <TopProductsItem
            key={topProduct.product.id}
            topProduct={topProduct}
          />
        ))}
      </div>
    </section>
  );
}
