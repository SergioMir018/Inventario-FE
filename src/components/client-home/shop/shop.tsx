import Filters from "./filters";
import ShopProductsItem from "./shop-product-item";

export default function Shop() {
  return (
    <section className="text-white font-gabarito grid grid-cols-4 mx-28 mt-12 h-full mb-auto">
      <div className="col-span-1 flex justify-center items-start">
        <Filters />
      </div>
      <div className="col-span-3 mb-10">
        <h1 className="col-span-3 font-gabarito-bold text-5xl mb-5">Tienda</h1>
        <div className="grid grid-cols-3 gap-4">
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />
          <ShopProductsItem />  
        </div>
      </div>
    </section>
  );
}
