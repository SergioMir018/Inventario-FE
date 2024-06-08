import Chart from 'react-apexcharts';

import { curveType } from '../../../../types/apexcharts-types.ts';
import { alignType } from '../../../../types/apexcharts-types.ts';

export default function SalesChart() {
  const state = {
    series: [
      {
        name: 'Ganancias',
        data: [
          3465, 5278, 3834, 2402, 3354, 2611, 2146, 2053, 6689, 8547, 5525,
          6017,
        ],
      },
      {
        name: 'Ordenes',
        data: [
          3557, 4170, 6297, 4826, 1434, 1788, 2790, 3973, 7356, 9951, 3702,
          3535,
        ],
      },
    ],
    options: {
      chart: {
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth' as curveType,
      },
      title: {
        text: 'Ventas vs Ordenes',
        align: 'left' as alignType,
        style: {
          color: '#ffffff',
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
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
      },
      yaxis: [
        {
          seriesName: 'Ganancias',
          labels: {
            formatter: function (value: number) {
              return `$${value}`;
            },
            style: {
              colors: ['#d2f56a'],
            },
          },
        },
        {
          seriesName: 'Ordenes',
          opposite: true,
          labels: {
            style: {
              colors: ['#e94e2d'],
            },
          },
        },
      ],
      grid: {
        borderColor: '#404040',
        strokeDashArray: 10,
      },
      colors: ['#d2f56a', '#e94e2d'],
      legend: {
        labels: {
          colors: '#ffffff',
        },
      },
    },
  };

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
