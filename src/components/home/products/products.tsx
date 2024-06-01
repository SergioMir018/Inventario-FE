import AddButton from "./add-button";
import ProductsSection from "./products-section";

export default function Products() {
  return (
    <div className="w-full h-[40rem] overflow-y-auto px-3 mt-8">
      <ProductsSection />
      <AddButton />
    </div>
  )
}
