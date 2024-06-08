import { useState, useEffect, ChangeEvent } from 'react';
import { BASE_URL } from '../../../types/constants,';
import PopUp from '../../shared/pop-up';
import { Product } from '../../../types/http-types';
import { fetchProductById } from '../../../api/admin';
import { useNavigate } from 'react-router-dom';
import EditIcon from '../../../icons/edit-icon';

interface ProductDetailsProps {
  id: string;
}

export default function ProductEdit({ id }: ProductDetailsProps) {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const [previewImage, setPreviewImage] = useState<string | undefined>();

  useEffect(() => {
    const getProduct = async () => {
      const fetchedProduct = await fetchProductById(id);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
      }
    };

    getProduct();
  }, [id]);

  const handleCancelAction = () => {
    navigate('products');
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditImageClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <PopUp>
      <div className='w-[35rem] flex flex-col gap-3 bg-dark rounded-lg'>
        <div className='h-80 w-full bg-gray-500 rounded-tr-lg rounded-tl-lg relative'>
          <img
            src={previewImage || `${BASE_URL}/${product?.photo}`}
            className='h-full w-full object-cover rounded-tr-lg rounded-tl-lg'
          />
          <button
            onClick={handleEditImageClick}
            className='bg-dark absolute top-5 right-5 w-10 h-10 flex justify-center items-center rounded-full hover:bg-dark/80 transition duration-100'
          >
            <EditIcon />
          </button>
          <input
            id='fileInput'
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>
        <div className='mx-5 mb-5'>
          <h1 className='text-2xl font-gabarito-bold'>
            Edita la info del producto
          </h1>
          <label className='text-white/50 font-gabarito pt-3'>Nombre:</label>
          <input
            placeholder={product?.name}
            className='w-full p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
          />
          <label className='text-white/50 font-gabarito pt-3'>
            Descripcion corta:
          </label>
          <textarea
            placeholder={product?.short_desc}
            className='w-full h-15 resize-none p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
          />
          <label className='text-white/50 font-gabarito pt-3'>
            Descripcion:
          </label>
          <textarea
            placeholder={product?.desc}
            className='w-full h-18 resize-none p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
          />
          <label className='text-white/50 font-gabarito pt-3'>Precio:</label>
          <input
            placeholder={`$${product?.price}`}
            type='text'
            className='w-full p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
          />
          <div className='flex justify-between gap-5'>
            <button
              onClick={handleCancelAction}
              className='py-2 mt-5 w-full text-white font-gabarito-bold border-2 border-dark rounded-md hover:border-2 hover:border-white transition duration-100'
            >
              Cancelar
            </button>
            <button
              type='button'
              className='bg-white w-full text-black mt-5 py-2 font-gabarito-bold rounded-md hover:bg-white/80 transition duration-100'
            >
              Editar
            </button>
          </div>
        </div>
      </div>
    </PopUp>
  );
}
