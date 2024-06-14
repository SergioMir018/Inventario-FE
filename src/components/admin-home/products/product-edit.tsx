import { useState, useEffect, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BASE_URL } from '../../../types/constants';
import PopUp from '../../shared/pop-up';
import { Category, Product } from '../../../types/http-types';
import { fetchProductById } from '../../../api/admin';
import { useNavigate } from 'react-router-dom';
import EditIcon from '../../../icons/edit-icon';
import arrayBufferToBase64 from '../../../utils/arrayBufferToBase64';
import axios from 'axios';
import { fetchCategories } from '../../../api/client';
import CategoryDropDown from './category-dropdown';

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
  const [category, setSelectedCategory] = useState('');
  const [categoryId, setSelectedCategoryId] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [areChanges, setAreChanges] = useState(false);

  const { register, handleSubmit, setValue, watch } =
    useForm<IUpdateProductForm>();

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

    const getCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
    getProduct();
  }, [id, setValue]);

  useEffect(() => {
    const subscription = watch((value) => {
      if (initialProduct) {
        const changes = {
          name: value.name !== initialProduct.name,
          short_desc: value.short_desc !== initialProduct.short_desc,
          desc: value.desc !== initialProduct.desc,
          price:
            value.price?.replace(',', '.') !== initialProduct.price.toString(),
          file: !!file,
        };

        setAreChanges(
          changes.name ||
            changes.short_desc ||
            changes.desc ||
            changes.price ||
            changes.file
        );
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, initialProduct, file]);

  useEffect(() => {
    if(initialProduct) {
      setAreChanges(category !== initialProduct.category);
    }
  }, [category, initialProduct]);

  const handleCancelAction = () => {
    navigate('products');
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];

      const extension = selectedFile.name.split('.').pop();
      setFileExt(extension || '');

      setAreChanges(true);

      const reader = new FileReader();
      reader.readAsArrayBuffer(selectedFile);

      reader.onload = function () {
        const arrayBuffer = reader.result;
        const base64Image = arrayBufferToBase64(arrayBuffer);
        setFile(base64Image);
        setFileScr(URL.createObjectURL(selectedFile));
      };
    }
  };

  const updateProductAction: SubmitHandler<IUpdateProductForm> = async (
    data: IUpdateProductForm
  ) => {
    try {
      const changes: Partial<
        IUpdateProductForm & {
          photo?: string;
          imageExt?: string;
          category?: string;
        }
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

      if (categoryId !== initialProduct?.category) {
        changes.category = categoryId;
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
              type='button'
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
            <label className='text-white font-gabarito pt-3'>
              Categoría del producto
            </label>
            <CategoryDropDown
              isEdit={true}
              productCategory={product?.category}
              categories={categories}
              category={category}
              setCategory={setSelectedCategory}
              setCategoryId={setSelectedCategoryId}
            />
            <label className='text-white/50 font-gabarito pt-3'>Nombre</label>
            <input
              {...register('name')}
              className='w-full p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
            />
            <label className='text-white/50 font-gabarito pt-3'>
              Descripción corta
            </label>
            <textarea
              {...register('short_desc')}
              className='w-full h-15 resize-none p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
            />
            <label className='text-white/50 font-gabarito pt-3'>
              Descripción
            </label>
            <textarea
              {...register('desc')}
              className='w-full h-18 resize-none p-1 font-gabarito bg-transparent outline-none ring ring-white/50 focus:ring focus:ring-white mt-1 mb-2 rounded-sm'
            />
            <label className='text-white/50 font-gabarito pt-3'>Precio</label>
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
                className={`bg-white w-full text-black mt-5 py-2 font-gabarito-bold rounded-md transition duration-100 ${
                  !areChanges
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-white/80'
                }`}
                disabled={!areChanges}
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
