import Chart from "react-apexcharts"

export default function ProductsDonut () {
  const state = {
    series: [68, 43, 15],
    options : {
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
              show: true
            }
          }
        }
      }
    },
    labels: ["Electronics", "Laptops", "Iphones"],
    dataLabels: {
      dropShadow: {
        blur: 3,
        opacity: 0.8
      }
    },
    colors: ['#e94e2d', '#d2f56a', '#4b6a6f'],
    title: {
      text: "Ventas por categoria",
      style: {
        color: '#ffffff'
      }
    },
    legend: {
      position: 'bottom' as 'left' | 'right' | 'bottom' | 'top',
      labels: {
        colors: '#ffffff'
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
    }
  }

  return (
    <section className="col-span-1 bg-dark pt-3 pl-3 pr-3 rounded-xl">
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        width="100%"
        height="280"
      />
    </section>
  )
}