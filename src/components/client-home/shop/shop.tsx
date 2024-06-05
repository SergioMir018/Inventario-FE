import { useEffect, useState } from "react";
import Filters from "./filters";
import ShopProductsItem from "./shop-product-item";
import { fetchProducts } from "../../../api/products";
import { Product } from "../../../types/http-types";

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);
  return (
    <section className="text-white font-gabarito grid grid-cols-4 mx-28 mt-12 h-full mb-auto">
      <div className="col-span-1 flex justify-center items-start">
        <Filters />
      </div>
      <div className="col-span-3 mb-10">
        <h1 className="col-span-3 font-gabarito-bold text-5xl mb-5">Tienda</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map(product => (
            <ShopProductsItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
