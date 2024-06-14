import { useEffect, useRef, useState } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClickHook';
import { Category } from '../../../types/http-types';

interface CategoryDropDownProps {
  setCategory: (category: string) => void;
  setCategoryId: (categoryId: string) => void;
  category: string;
  categories: Category[];
  isEdit?: boolean;
  productCategory?: string;
}

export default function CategoryDropDown({
  setCategory,
  setCategoryId,
  category,
  categories,
  isEdit,
  productCategory,
}: CategoryDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeInput);

    if (isEdit && productCategory) {
      setCategory(productCategory);
      const foundCategory = categories.find((c) => c.name === productCategory);
      if (foundCategory) {
        setCategoryId(foundCategory.id);
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeInput);
    };
  }, [isEdit, productCategory, categories, setCategory, setCategoryId]);

  const handleEscapeInput = (e: KeyboardEvent) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleDropdownClick = (selectedCategory: Category) => {
    setCategoryId(selectedCategory.id);
    setCategory(selectedCategory.name);
    setIsOpen(false);
  };

  const handleOnDropDownClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      ref={dropdownRef}
      className='flex flex-col right-0 w-full relative'
    >
      <button
        id='dropdownDefaultButton'
        data-dropdown-toggle='dropdown'
        className='text-white bg-metal font-gabarito-medium hover:bg-darker focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between'
        type='button'
        onClick={handleOnDropDownClick}
      >
        {category}
        <svg
          className='w-2.5 h-2.5 ml-2.5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id='dropdown'
          className='divide-y divide-gray-100 rounded-lg shadow w-full bg-metal absolute pointer top-12 animate-fade-down animate-duration-100 animate-ease-in-out'
        >
          <ul
            className='py-2 text-sm text-gray-200 font-gabarito-medium'
            aria-labelledby='dropdownDefaultButton'
          >
            {categories.map((category) => (
              <li key={category.id}>
                <div
                  onClick={() => handleDropdownClick(category)}
                  className='block px-4 py-2 hover:bg-gray-500/30 dark:hover:bg-black/30 dark:hover:text-white cursor-pointer'
                >
                  {category.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
