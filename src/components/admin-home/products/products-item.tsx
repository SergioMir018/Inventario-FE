import { Product } from '../../../types/http-types';
import { BASE_URL } from '../../../types/constants,';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Badge from '../../shared/badge';

interface ProductItemProps {
  product: Product;
}

export default function ProductsItem({ product }: ProductItemProps) {

  const navigate = useNavigate();

    const location = useLocation();

    const isAdmin = location.pathname.includes('admin');

  const handleDeleteButtonAction = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/product/delete`, {
        params: {
          id: product.id,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.error('Éxito al eliminar el producto:', response.data);
      } else {
        console.error('Error al eliminar el producto:', response.data);
      }
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const handleDetailButtonAction = () => {
    navigate(`details/productId=${product.id}`);
  };

  const handleEditButtonAction = () => {
    navigate(`edit/productId=${product.id}`);
  };

  return (
    <div className='h-[26rem] flex flex-col gap-3 bg-dark rounded-lg hover:drop-shadow-sm group-hover:drop-shadow-neon transition duration-100'>
      <div className='h-60 w-full bg-gray-500 rounded-tr-lg rounded-tl-lg'>
        <img
          src={`${BASE_URL}/${product.photo}`}
          alt={product.name}
          className='h-full w-full object-cover rounded-tr-lg rounded-tl-lg'
        />
      </div>
      <div className='relative'>
        <div className='flex justify-between'>
          <p className='text-white ml-5 text-2xl font-gabarito-medium pt-5'>
            {product.name}
          </p>
          <Badge styles='mt-5 mr-6' text={product.category} />
        </div>
        <p className='text-white/50 mx-5 font-gabarito pt-5'>
          {product.short_desc}
        </p>
        <div className='w-72 ml-5 mt-4 flex justify-between'>
          {isAdmin && (
            <button
              onClick={handleEditButtonAction}
              className='py-1 px-5 mb-3 text-white font-gabarito-bold rounded-md hover:bg-white hover:text-black transition duration-100'
            >
              Editar
            </button>
          )}
          {isAdmin && (
            <button
              onClick={handleDeleteButtonAction}
              className='py-1 px-5 mb-3 text-white font-gabarito-bold border-2 border-dark rounded-md hover:border-2 hover:border-white hover:text-red transition duration-100'
            >
              Eliminar
            </button>
          )}
          <button
            onClick={handleDetailButtonAction}
            className='py-1 px-5 mb-3 text-white font-gabarito-bold border-2 border-dark rounded-md hover:border-2 hover:border-white transition duration-100'
          >
            Más info
          </button>
        </div>
        <p className='text-green text-3xl font-gabarito-bold absolute right-8 bottom-3'>
          ${product.price}
        </p>
      </div>
    </div>
  );
}
