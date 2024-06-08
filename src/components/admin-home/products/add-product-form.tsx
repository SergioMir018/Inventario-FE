import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../../icons/close-icon';
import { useState, ChangeEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL } from '../../../types/constants,';
import PopUp from '../../shared/pop-up';

interface IInsertNewProductForm {
  name: string;
  short_desc: string;
  desc: string;
  price: string;
}

export default function AddProductForm() {
  const [file, setFile] = useState<string>();
  const [fileScr, setFileScr] = useState<string>('');
  const [fileExt, setFileExt] = useState('');

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IInsertNewProductForm>();

  async function handleImageInputChange(e: ChangeEvent<HTMLInputElement>) {
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
        console.log(base64Image);
      };
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return btoa(binary);
  }

  const handleClosePopUpClick = () => {
    navigate('products');
  };

  const insertNewProductAction: SubmitHandler<IInsertNewProductForm> = async (
    data: IInsertNewProductForm
  ) => {
    try {
      const requestData = {
        name: data.name,
        short_desc: data.short_desc,
        desc: data.desc,
        price: data.price.replace(',', '.'),
        photo: file,
        imageExt: fileExt,
      };

      console.log(requestData);

      const response = await axios.post(
        `${BASE_URL}/product/create`,
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Producto agregado con éxito:', response.data);
      navigate('products');
      window.location.reload();
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  };

  return (
    <PopUp>
      <div className=' w-[35rem] bg-dark rounded-md flex flex-col justify-between'>
        <div className='w-full flex justify-end mt-2 pr-2'>
          <button
            className='w-6 h-6'
            onClick={handleClosePopUpClick}
          >
            <CloseIcon />
          </button>
        </div>
        <form
          className='w-full h-[95%] px-5 pb-5 flex flex-col'
          onSubmit={handleSubmit(insertNewProductAction)}
        >
          <h1 className='text-2xl font-gabarito-bold'>
            Agrega un nuevo producto
          </h1>
          <p className='text-white/60'>
            Llena el formulario para agregar un nuevo producto a tu tienda
          </p>
          <label className='text-white font-gabarito pt-5'>
            Nombre del producto
          </label>
          <input
            {...register('name')}
            type='text'
            className='w-full p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
          />
          <label className='text-white font-gabarito pt-5'>
            Descripción corta
          </label>
          <textarea
            {...register('short_desc')}
            className='w-full h-15 resize-none p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
          />
          <label className='text-white font-gabarito pt-5'>
            Descripción larga
          </label>
          <textarea
            {...register('desc')}
            className='w-full h-18 resize-none p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
          />
          <label className='text-white font-gabarito pt-5'>
            Precio del producto
          </label>
          <input
            {...register('price')}
            type='text'
            className='w-full p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
          />
          <label className='text-white font-gabarito pt-5'>
            Imágen del producto
          </label>
          <div className='w-full h-60 flex flex-col gap-2'>
            <input
              type='file'
              accept='image/*'
              className='rounded-md'
              onChange={handleImageInputChange}
            />
            {file && (
              <img
                src={fileScr}
                alt='Vista previa de la imagen'
                className='h-full w-full object-cover'
              />
            )}
          </div>
          <button
            type='submit'
            className='bg-white text-black mt-5 py-2 font-gabarito-bold rounded-md hover:bg-white/80 transition duration-100'
          >
            Agregar producto
          </button>
        </form>
      </div>
    </PopUp>
  );
}
