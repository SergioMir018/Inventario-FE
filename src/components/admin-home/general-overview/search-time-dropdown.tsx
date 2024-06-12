import { useEffect, useRef, useState } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClickHook';

export default function SearchTimeDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [period, setPeriod] = useState('Período');
  const dropdownRef = useRef(null);

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeInput);

    return () => {
      document.removeEventListener('keydown', handleEscapeInput);
    };
  }, []);

  const handleEscapeInput = (e: KeyboardEvent) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleDropdownClick = (newPeriod: string) => {
    setPeriod(newPeriod);
    setIsOpen(false);
  };

  const handleOnDropDownClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      ref={dropdownRef}
      className='flex flex-col absolute right-0 w-[25%]'
    >
      <button
        id='dropdownDefaultButton'
        data-dropdown-toggle='dropdown'
        className='text-white bg-metal font-gabarito-medium hover:bg-darker focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between'
        type='button'
        onClick={handleOnDropDownClick}
      >
        {period}
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
          className='z-10 divide-y divide-gray-100 rounded-lg shadow w-44 bg-metal
        absolute pointer right-52 animate-fade-left animate-duration-100 animate-ease-in-out'
        >
          <ul
            className='py-2 text-sm text-gray-200 font-gabarito-medium'
            aria-labelledby='dropdownDefaultButton'
          >
            <li>
              <div
                onClick={() => handleDropdownClick('Todo el tiempo')}
                className='block px-4 py-2 hover:bg-gray-500/30 dark:hover:bg-black/30 dark:hover:text-white cursor-pointer'
              >
                Todo el tiempo
              </div>
            </li>
            <li>
              <div
                onClick={() => handleDropdownClick('Este día')}
                className='block px-4 py-2 hover:bg-gray-500/30 dark:hover:bg-black/30 dark:hover:text-white cursor-pointer'
              >
                Este día
              </div>
            </li>
            <li>
              <div
                onClick={() => handleDropdownClick('Esta semana')}
                className='block px-4 py-2 hover:bg-gray-500/30 dark:hover:bg-black/30 dark:hover:text-white cursor-pointer'
              >
                Esta semana
              </div>
            </li>
            <li>
              <div
                onClick={() => handleDropdownClick('Este mes')}
                className='block px-4 py-2 hover:bg-gray-500/30 dark:hover:bg-black/30 dark:hover:text-white cursor-pointer'
              >
                Este mes
              </div>
            </li>
            <li>
              <div
                onClick={() => handleDropdownClick('Este año')}
                className='block px-4 py-2 hover:bg-gray-500/30 dark:hover:bg-black/30 dark:hover:text-white cursor-pointer'
              >
                Este año
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
