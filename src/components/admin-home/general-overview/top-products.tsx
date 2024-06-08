import ProductsSearch from './products-search.tsx';
import TopProductsCategories from './top-products-categories.tsx';
import TopProductsItem from './top-products-item.tsx';

export default function TopProducts() {
  return (
    <section className='col-span-4 bg-dark w-full h-96 rounded-xl px-6 py-4 text-white overflow-hidden'>
      <div className='flex justify-between items-center w-full'>
        <h2 className='text-2xl font-gabarito-bold'>Productos top 10</h2>
        <ProductsSearch />
      </div>
      <div className='w-full h-72 overflow-y-auto mt-8 pr-5 pb-10'>
        <TopProductsCategories />
        <TopProductsItem />
        <TopProductsItem />
        <TopProductsItem />
        <TopProductsItem />
        <TopProductsItem />
        <TopProductsItem />
        <TopProductsItem />
        <TopProductsItem />
        <TopProductsItem />
        <TopProductsItem />
      </div>
    </section>
  );
}
