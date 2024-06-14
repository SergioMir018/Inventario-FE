import SalesOverview from './charts/sales-overview.tsx';
import ChartsInfo from './charts/charts-info.tsx';
import { useState, useEffect } from 'react';
import { fetchCompletedOrders, fetchProducts } from '../../../api/admin.ts';
import { Category, Order, Product } from '../../../types/http-types.ts';
import { fetchCategories } from '../../../api/client.ts';

export default function ChartsSection() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const ordersData = await fetchCompletedOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error(error);
      }
    };

    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error(error);
      }
    };

    const getCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
    getOrders();
    getProducts();
  }, []);

  useEffect(() => {}, [products, orders]);

  return (
    <section className='w-full h-[46rem] overflow-y-auto pr-8'>
      <SalesOverview orders={orders} />
      <ChartsInfo orders={orders} products={products} categories={categories} />
    </section>
  );
}
