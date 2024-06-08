import { useState, useEffect } from 'react';
import { BASE_URL } from '../../../types/constants,';
import PopUp from '../../shared/pop-up';
import { Product } from '../../../types/http-types';
import { fetchProductById } from '../../../api/admin';
import { useNavigate } from 'react-router-dom';

interface ProductDetailsProps {
  id: string;
}

export default function ProductDetails({ id }: ProductDetailsProps) {

  const navigate = useNavigate()

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const getProduct = async () => {
      const fetchedProduct = await fetchProductById(id);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
      }
    };

    getProduct();
  }, [id]);

  const handleAcceptAction = () => {
    navigate('products')
  }

  return (
    <PopUp>
      <div className='h-[40rem w-[35rem] flex flex-col gap-3 bg-dark rounded-lg'>
        <div className='h-80 w-full bg-gray-500 rounded-tr-lg rounded-tl-lg'>
          <img
            src={`${BASE_URL}/${product?.photo}`}
            className='h-full w-full object-cover rounded-tr-lg rounded-tl-lg'
          />
        </div>
        <div className='mx-5 mb-5'>
          <p className='text-white/50 font-gabarito pt-3'>Nombre:</p>
          <p className='text-white text-xl font-gabarito-medium'>
            {product?.name}
          </p>
          <p className='text-white/50 font-gabarito pt-3'>Descripcion corta:</p>
          <p className='text-white text-xl font-gabarito'>
            {product?.short_desc}
          </p>
          <p className='text-white/50 font-gabarito pt-3'>Descripcion:</p>
          <p className='text-white text-xl font-gabarito'>{product?.desc}</p>
          <p className='text-white/50 font-gabarito pt-3'>Precio:</p>
          <p className='text-white text-xl font-gabarito'>${product?.price}</p>
          <button
            type='button'
            onClick={handleAcceptAction}
            className='bg-white w-full text-black mt-5 py-2 font-gabarito-bold rounded-md hover:bg-white/80 transition duration-100'
          >
            Aceptar
          </button>
        </div>
      </div>
    </PopUp>
  );
}
