import { useState, useEffect, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BASE_URL } from '../../../types/constants,';
import PopUp from '../../shared/pop-up';
import { Product } from '../../../types/http-types';
import { fetchProductById } from '../../../api/admin';
import { useNavigate } from 'react-router-dom';
import EditIcon from '../../../icons/edit-icon';
import arrayBufferToBase64 from '../../../utils/arrayBufferToBase64';
import axios from 'axios';

interface ProductDetailsProps {
  id: string;
}

interface IUpdateProductForm {
  name: string;
  short_desc: string;
  desc: string;
  price: string;
}

export default function ProductEdit({ id }: ProductDetailsProps) {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const [initialProduct, setInitialProduct] = useState<Product>();
  const [file, setFile] = useState<string>();
  const [fileScr, setFileScr] = useState<string>('');
  const [fileExt, setFileExt] = useState('');

  const { register, handleSubmit, setValue } = useForm<IUpdateProductForm>();

  useEffect(() => {
    const getProduct = async () => {
      const fetchedProduct = await fetchProductById(id);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        setInitialProduct(fetchedProduct);

        setValue('name', fetchedProduct.name);
        setValue('short_desc', fetchedProduct.short_desc);
        setValue('desc', fetchedProduct.desc);
        setValue('price', fetchedProduct.price.toString());
      }
    };

    getProduct();
  }, [id, setValue]);

  const handleCancelAction = () => {
    navigate('products');
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];

      const extension = selectedFile.name.split('.').pop();
      setFileExt(extension || '');

      setFileScr(URL.createObjectURL(selectedFile));

      const reader = new FileReader();
      reader.readAsArrayBuffer(selectedFile);

      reader.onload = function () {
        const arrayBuffer = reader.result;
        const base64Image = arrayBufferToBase64(arrayBuffer);
        setFile(base64Image);
      };
    }
  };

  const updateProductAction: SubmitHandler<IUpdateProductForm> = async (
    data: IUpdateProductForm
  ) => {
    try {
      const changes: Partial<
        IUpdateProductForm & { photo?: string; imageExt?: string }
      > = {};

      if (data.name && data.name !== initialProduct?.name) {
        changes.name = data.name;
      }
      if (data.short_desc && data.short_desc !== initialProduct?.short_desc) {
        changes.short_desc = data.short_desc;
      }
      if (data.desc && data.desc !== initialProduct?.desc) {
        changes.desc = data.desc;
      }
      if (
        data.price &&
        data.price.replace(',', '.') !== initialProduct?.price.toString()
      ) {
        changes.price = data.price.replace(',', '.');
      }
      if (file) {
        changes.photo = file;
        changes.imageExt = fileExt;
      }

      const filteredChanges = Object.fromEntries(
        Object.entries(changes).filter(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ([_key, value]) => value !== undefined && value !== ''
        )
      );

      if (Object.keys(filteredChanges).length > 0) {
        const response = await axios.put(
          `${BASE_URL}/product/update`,
          filteredChanges,
          {
            params: {
              id: id,
            },
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        console.log('Producto actualizado con éxito:', response.data);
        navigate('products');
        window.location.reload();
      } else {
        console.log('No hay cambios para actualizar.');
      }
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
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
      <form onSubmit={handleSubmit(updateProductAction)}>
        <div className='w-[35rem] flex flex-col gap-3 bg-dark rounded-lg'>
          <div className='h-80 w-full bg-gray-500 rounded-tr-lg rounded-tl-lg relative'>
            <img
              src={fileScr || `${BASE_URL}/${product?.photo}`}
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
              {...register('name')}
              className='w-full p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
            />
            <label className='text-white/50 font-gabarito pt-3'>
              Descripcion corta:
            </label>
            <textarea
              {...register('short_desc')}
              className='w-full h-15 resize-none p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
            />
            <label className='text-white/50 font-gabarito pt-3'>
              Descripcion:
            </label>
            <textarea
              {...register('desc')}
              className='w-full h-18 resize-none p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
            />
            <label className='text-white/50 font-gabarito pt-3'>Precio:</label>
            <input
              {...register('price')}
              type='text'
              className='w-full p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
            />
            <div className='flex justify-between gap-5'>
              <button
                type='button'
                onClick={handleCancelAction}
                className='py-2 mt-5 w-full text-white font-gabarito-bold border-2 border-dark rounded-md hover:border-2 hover:border-white transition duration-100'
              >
                Cancelar
              </button>
              <button
                type='submit'
                className='bg-white w-full text-black mt-5 py-2 font-gabarito-bold rounded-md hover:bg-white/80 transition duration-100'
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      </form>
    </PopUp>
  );
}
