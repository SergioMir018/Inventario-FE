import { useEffect, useState } from 'react';
import { Order, Visit } from '../../../../types/http-types';
import { BASE_URL } from '../../../../types/constants';
import axios from 'axios';
import { usePageStats } from '../../../../hooks/usePageStats';

interface SalesOverviewProps {
  orders: Order[];
}

export default function SalesOverview({ orders }: SalesOverviewProps) {
  const [visits, setVisits] = useState<Visit[]>([]);

  const {
    totalSales,
    totalOrdersCurrentWeek,
    totalOrdersPreviousWeek,
    totalSalesCurrentWeek,
    totalSalesPreviousWeek,
    totalVisitsCurrentWeek,
    totalVisitsPreviousWeek,
    salesChange,
    ordersChange,
    visitsChange,
  } = usePageStats(orders, visits);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/visit`);
        setVisits(response.data);
      } catch (error) {
        console.error('Error fetching visit data:', error);
      }
    };

    fetchVisits();
  }, []);

  return (
    <section className='flex justify-between bg-dark mt-[2rem] rounded-xl'>
      <div className='bg-green text-black w-full py-5 pl-8 rounded-tl-xl rounded-bl-xl'>
        <h1 className='font-gabarito text-lg'>Ventas totales</h1>
        <h2 className='font-gabarito-medium text-3xl mt-3'>
          ${totalSales.toFixed(2)}
        </h2>
        <div className='flex font-gabarito mt-[2rem]'>
          <p>
            {salesChange > 0 && '+'}
            {salesChange.toFixed(1)}%
          </p>
          <p className='ml-[2rem]'>
            {totalSalesCurrentWeek > totalSalesPreviousWeek ? '+' : '-'}$
            {
              (totalSalesCurrentWeek - totalSalesPreviousWeek)
                .toFixed(2)
                .split('-')[1]
            }{' '}
            esta semana
          </p>
        </div>
      </div>
      <div className='w-full py-5 pl-8 text-white'>
        <h1 className='font-gabarito text-lg'>Visitantes totales</h1>
        <h2 className='font-gabarito-medium text-3xl mt-3'>{visits.length}</h2>
        <div className='flex font-gabarito mt-[2rem]'>
          <p className={`text-${visitsChange > 0 ? 'green' : 'red'}`}>
            {visitsChange > 0 && '+'}
            {visitsChange.toFixed(1)}%
          </p>
          <p className='ml-[2rem]'>
            {totalVisitsCurrentWeek > totalVisitsPreviousWeek ? '+' : ''}
            {totalVisitsCurrentWeek - totalVisitsPreviousWeek} esta semana
          </p>
        </div>
      </div>
      <div className='w-full py-5 pl-8 border-l border-white/10 text-white'>
        <h1 className='font-gabarito text-lg'>Ordenes totales</h1>
        <h2 className='font-gabarito-medium text-3xl mt-3'>{orders.length}</h2>
        <div className='flex font-gabarito mt-[2rem]'>
          <p className={`text-${ordersChange > 0 ? 'green' : 'red'}`}>
            {ordersChange > 0 && '+'}
            {ordersChange.toFixed(1)}%
          </p>
          <p className='ml-[2rem]'>
            {totalOrdersCurrentWeek > totalOrdersPreviousWeek ? '+' : ''}
            {totalOrdersCurrentWeek - totalOrdersPreviousWeek} esta semana
          </p>
        </div>
      </div>
    </section>
  );
}
