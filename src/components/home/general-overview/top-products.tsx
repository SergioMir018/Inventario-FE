import ProductsSearch from "./products-search.tsx"

export default function TopProducts () {
  return (
    <section className="col-span-3 bg-dark w-full h-[12rem] rounded-xl px-6 py-4 text-white">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-2xl font-gabarito-bold">
          Productos top
        </h2>
        <ProductsSearch />
      </div>
    </section>
  )
}