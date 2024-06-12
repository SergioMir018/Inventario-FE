import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { curveType, alignType } from '../../../../types/apexcharts-types.ts';
import { Order } from '../../../../types/http-types.ts';

interface SalesChartProps {
  orders: Order[];
}

export default function SalesChart({ orders }: SalesChartProps) {
  const [state, setState] = useState({
    series: [
      { name: 'Ganancias', data: [] as number[] },
      { name: 'Ordenes', data: [] as number[] },
    ],
    options: {
      chart: {
        zoom: { enabled: false },
        background: 'transparent',
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' as curveType },
      title: {
        text: 'Ventas vs Ordenes',
        align: 'left' as alignType,
        style: { color: '#ffffff' },
      },
      markers: {
        size: 0,
        hover: { sizeOffset: 6 },
      },
      xaxis: {
        categories: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ags',
          'Sept',
          'Oct',
          'Nov',
          'Dic',
        ],
        labels: { style: { colors: '#ffffff' } },
        axisBorder: { color: '#404040' },
        axisTicks: { color: '#404040' },
      },
      yaxis: [
        {
          seriesName: 'Ganancias',
          labels: {
            formatter: (value: number) => `$${value}`,
            style: { colors: ['#d2f56a'] },
          },
        },
        {
          seriesName: 'Ordenes',
          opposite: true,
          labels: { style: { colors: ['#e94e2d'] } },
        },
      ],
      grid: { borderColor: '#404040', strokeDashArray: 10 },
      colors: ['#d2f56a', '#e94e2d'],
      legend: { labels: { colors: '#ffffff' } },
    },
  });

  useEffect(() => {
    const monthlyData = Array(12)
      .fill(null)
      .map(() => ({ orders: 0, revenue: 0 }));

    orders.forEach((order) => {
      const month = new Date(order.creationDate).getMonth();
      monthlyData[month].orders += 1;
      monthlyData[month].revenue += order.totalPayment;
    });

    const ordersData = monthlyData.map((data) => data.orders);
    const revenueData = monthlyData.map((data) => data.revenue);

    setState((prevState) => ({
      ...prevState,
      series: [
        { name: 'Ganancias', data: revenueData },
        { name: 'Ordenes', data: ordersData },
      ],
    }));
  }, [orders]);

  return (
    <section className='col-span-3 bg-dark pt-3 pl-3 pr-3 rounded-xl'>
      <Chart
        options={state.options}
        series={state.series}
        type='line'
        width='100%'
        height='280'
      />
    </section>
  );
}
