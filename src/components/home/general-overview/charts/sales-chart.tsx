import Chart from "react-apexcharts"

export default function SalesChart() {

  const state = {
    series: [{
      name: "Ventas",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Ordenes",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    }
    ],
    options: {
      chart: {
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth' as 'straight' | 'smooth' | 'stepline' | 'monotoneCubic',
      },
      title: {
        text: 'Ventas vs Ordenes',
        align: 'left',
        style: {
          color: '#ffffff'
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ags', 'Sept',
          'Oct', 'Nov', 'Dic'
        ],
      },
      grid: {
        borderColor: '#404040',
        strokeDashArray: 10
      },
      colors: ['#d2f56a', '#e94e2d'],
      legend: {
        labels: {
          colors: '#ffffff',
        }
      }
    }
  }
  
  return (
    <section className="col-span-3 bg-dark pt-3 pl-3 pr-3 rounded-xl">
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="100%"
        height="280"
      />
    </section>
  )
}
