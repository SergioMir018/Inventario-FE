import SalesChart from "./sales-chart.tsx"
import ProductsDonut from "./products-donut.tsx"

export default function ChartsInfo() {
  return (
    <section className="grid grid-cols-4 w-full
    mt-7 gap-7">
      <SalesChart />
      <ProductsDonut />
    </section>
  )
}
