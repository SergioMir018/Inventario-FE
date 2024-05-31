import TopHeader from "../../shared/top-header";
import AddButton from "./add-button";
import ProductsSection from "./products-section";

export default function Products() {
  return (
    <div className="w-full">
      <TopHeader />
      <ProductsSection />
      <AddButton />
    </div>
  )
}
