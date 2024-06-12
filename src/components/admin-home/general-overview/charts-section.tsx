import SalesOverview from './charts/sales-overview.tsx';
import ChartsInfo from './charts/charts-info.tsx';
import { useState, useEffect } from 'react';
import { fetchCompletedOrders } from '../../../api/admin.ts';
import { Order } from '../../../types/http-types.ts';

export default function ChartsSection() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const ordersData = await fetchCompletedOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error(error);
      }
    };

    getOrders();
  }, []);

  return (
    <section className='w-full h-[46rem] overflow-y-auto pr-8'>
      <SalesOverview orders={orders} />
      <ChartsInfo orders={orders} />
    </section>
  );
}
