import { useEffect, useState } from 'react';
import OrderItem from './order-item';
import { fetchOrders } from '../../../api/admin';
import { Order } from '../../../types/http-types';

export default function OrdersSection() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const ordersData = await fetchOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error(error);
      }
    };

    getOrders();
  }, []);

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5'>
      {orders.map((order) => (
        <OrderItem order={order} />
      ))}
    </section>
  );
}
