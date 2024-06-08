import SalesOverview from './charts/sales-overview.tsx';
import ChartsInfo from './charts/charts-info.tsx';

export default function ChartsSection() {
  return (
    <section className='w-full h-[46rem] overflow-y-auto pr-8'>
      <SalesOverview />
      <ChartsInfo />
    </section>
  );
}
