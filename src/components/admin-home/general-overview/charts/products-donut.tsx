import { useMemo } from 'react';
import Chart from 'react-apexcharts';
import { positionType } from '../../../../types/apexcharts-types';
import { Category, Order, Product } from '../../../../types/http-types';

interface ProductsDonutProps {
  products: Product[];
  categories: Category[];
  orders: Order[];
}

export default function ProductsDonut({
  products,
  categories,
  orders,
}: ProductsDonutProps) {
  const { series, labels } = useMemo(() => {
    const categorySales: { [key: string]: number } = {};

    categories.forEach((category) => {
      categorySales[category.name] = 0;
    });

    orders.forEach((order) => {
      order.products.forEach((item) => {
        const product = products.find((prod) => prod.id === item.productId);
        
        if (
          product &&
          Object.prototype.hasOwnProperty.call(categorySales, product.category)
        ) {
          categorySales[product.category] += item.quantity;
        }
      });
    });

    const series = Object.values(categorySales);
    const labels = Object.keys(categorySales);

    return { series, labels };
  }, [products, categories, orders]);

  const state = {
    series,
    options: {
      stroke: {
        width: 0,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
              },
            },
          },
        },
      },
      labels,
      dataLabels: {
        dropShadow: {
          blur: 3,
          opacity: 0.8,
        },
      },
      colors: [
        '#e94e2d',
        '#d2f56a',
        '#4b6a6f',
        '#f0abfc',
        '#b1c94e',
        '#5a6c8e',
      ], // Puedes ajustar los colores según tus necesidades
      title: {
        text: 'Ventas por categoría',
        style: {
          color: '#ffffff',
        },
      },
      legend: {
        position: 'bottom' as positionType,
        labels: {
          colors: '#ffffff',
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  return (
    <section className='col-span-1 bg-dark pt-3 pl-3 pr-3 rounded-xl'>
      <Chart
        options={state.options}
        series={state.series}
        type='donut'
        width='100%'
        height='280'
      />
    </section>
  );
}
