import { CheckboxGroup, Input } from '@nextui-org/react';
import CategoryCheckbox from './category-checkbox';
import { Category } from '../../../types/http-types';
import { useEffect, useState } from 'react';
import { fetchCategories } from '../../../api/client';

interface FiltersProps {
  selectedCategory: string[];
  setSelectedCategory: (categories: string[]) => void;
  setMinPrice: (price: number | null) => void;
  setMaxPrice: (price: number | null) => void;
  setProductName: (name: string) => void;
  filterAction: () => void;
}

export default function Filters({
  selectedCategory,
  setSelectedCategory,
  setMinPrice,
  setMaxPrice,
  setProductName,
  filterAction,
}: FiltersProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  const handleCategorySelection = (newValue: string[]) => {
    setSelectedCategory(
      newValue.length > 0 ? [newValue[newValue.length - 1]] : []
    );
  };

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
        <CheckboxGroup
          value={selectedCategory}
          onValueChange={handleCategorySelection}
        >
          {categories.map((category) => (
            <CategoryCheckbox
              key={category.id}
              category={category.name}
            />
          ))}
        </CheckboxGroup>
      </div>
      <div className='w-full text-lg flex flex-col mt-3'>
        <h2 className='text-white/80 ml-5'>Precio</h2>
        <div className='flex gap-2 mx-5 justify-between'>
          <Input
            type='number'
            label='Min'
            variant='bordered'
            className='bg-transparent'
            onChange={(e) =>
              setMinPrice(e.target.value ? parseFloat(e.target.value) : null)
            }
          />
          <Input
            type='number'
            label='Max'
            variant='bordered'
            className='bg-transparent'
            onChange={(e) =>
              setMaxPrice(e.target.value ? parseFloat(e.target.value) : null)
            }
          />
        </div>
        <h2 className='text-white/80 mt-3 ml-5'>Por nombre</h2>
        <Input
          type='text'
          variant='bordered'
          className='px-5 text-lg'
          onChange={(e) => setProductName(e.target.value)}
        />
        <button
          onClick={filterAction}
          className='mx-5 mt-5 py-2 mb-5 text-black bg-white hover:bg-white/80 font-gabarito-medium rounded-md transition duration-100 '
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
