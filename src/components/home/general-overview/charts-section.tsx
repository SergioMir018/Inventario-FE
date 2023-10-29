import SalesOverview from "./charts/sales-overview.tsx"
import ChartsInfo from "./charts/charts-info.tsx"

export default function ChartsSection() {
  return (
    <section className="w-full h-full">
      <SalesOverview />
      <ChartsInfo />
    </section>
  )
}
