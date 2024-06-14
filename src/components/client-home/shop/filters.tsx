import { Input } from '@nextui-org/react';
import CategoryCheckbox from './category-checkbox';
import { Category } from '../../../types/http-types';
import { useEffect, useState } from 'react';
import { fetchCategories } from '../../../api/client';

export default function Filters() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
  }, []);

  return (
    <div className='bg-dark w-full mr-10 rounded-md'>
      <h2 className='text-2xl mt-5 ml-5 font-gabarito-medium'>Filtros</h2>
      <div className='w-full text-lg flex flex-col ml-5 mt-4'>
        <h3 className='text-white/80'>Categorías</h3>
        {categories.map(category => {
          return <CategoryCheckbox key={category.id} category={category.name} />
        })}
      </div>
      <div className='w-full text-lg flex flex-col mt-3'>
        <h2 className='text-white/80 ml-5'>Precio</h2>
        <div className='flex gap-2 mx-5 justify-between'>
          <Input
            type='number'
            label='Min'
            variant='bordered'
            className='bg-transparent'
          />
          <Input
            type='number'
            label='Max'
            variant='bordered'
            className='bg-transparent'
          />
        </div>
        <h2 className='text-white/80 mt-3 ml-5'>Por nombre</h2>
        <Input
          type='text'
          variant='bordered'
          className='px-5 text-lg'
        />
        <button className='mx-5 mt-5 py-2 mb-5 text-black bg-white hover:bg-white/80 font-gabarito-medium rounded-md transition duration-100 '>
          Buscar
        </button>
      </div>
    </div>
  );
}
