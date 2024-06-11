import { useState, useEffect } from 'react';
import { fetchProductById } from '../../../api/admin';
import { useProductId } from '../../../hooks/useProductId';
import Footer from '../footer';
import ProductDetails from './product-details';
import { Product } from '../../../types/http-types';
import BackIcon from '../../../icons/back-icon';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetailsSection() {
  const productParamsId = useProductId();

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const getProduct = async () => {
      const fetchedProduct = await fetchProductById(productParamsId);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
      }
    };

    getProduct();
  }, [productParamsId]);

  const navigateBack = () => {
    navigate(`/${id}/client/home/shop`);
  };

  return (
    <section className='w-full min-h-screen flex flex-col justify-between text-white font-gabarito'>
      <button
        onClick={navigateBack}
        className='absolute top-5 left-5 flex gap-1 items-center text-xl font-gabarito-medium hover:bg-white hover:text-black transition duration-100 px-5 py-2 rounded-md'
      >
        <BackIcon />
        Atrás
      </button>
      <ProductDetails product={product} />
      <Footer />
    </section>
  );
}
