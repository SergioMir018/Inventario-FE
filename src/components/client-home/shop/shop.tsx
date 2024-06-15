import { useEffect, useState } from 'react';
import Filters from './filters';
import ShopProductsItem from './shop-product-item';
import { fetchProducts } from '../../../api/admin';
import { Product } from '../../../types/http-types';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [productName, setProductName] = useState<string>('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  const searchWithFilters = () => {
    let filtered = products;

    if (selectedCategory.length > 0) {
      filtered = filtered.filter(product => selectedCategory.includes(product.category));
    }

    if (minPrice !== null) {
      filtered = filtered.filter(product => product.price >= minPrice);
    }

    if (maxPrice !== null) {
      filtered = filtered.filter(product => product.price <= maxPrice);
    }

    if (productName) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(productName.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <section className='text-white font-gabarito grid grid-cols-4 mx-28 mt-12 h-full mb-auto'>
      <div className='col-span-1 flex justify-center items-start'>
        <Filters
          filterAction={searchWithFilters}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          setProductName={setProductName}
        />
      </div>
      <div className='col-span-3 mb-10'>
        <h1 className='col-span-3 font-gabarito-bold text-5xl mb-5'>Tienda</h1>
        <div className='grid grid-cols-3 gap-4'>
          {filteredProducts.map((product) => (
            <ShopProductsItem
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
