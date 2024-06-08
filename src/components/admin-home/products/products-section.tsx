import ProductsItem from "./products-item";
import { useEffect, useState } from 'react';
import { Product } from '../../../types/http-types';
import { fetchProducts } from '../../../api/admin';

export default function ProductsSection() {
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
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
      {products.map(product => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </section>
  )
}
