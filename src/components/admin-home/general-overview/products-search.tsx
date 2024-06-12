import { ChangeEvent } from 'react';
import SearchTimeDropDown from './search-time-dropdown.tsx';

interface ProductsSearchProps {
  onSearchChange: (searchTerm: string) => void;
  setPeriod: (period: string) => void;
}

export default function ProductsSearch({ onSearchChange, setPeriod }: ProductsSearchProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className='w-[55%] flex justify-between relative'>
      <input
        type='text'
        placeholder='Search'
        className='bg-transparent font-gabarito
      border px-6 py-1 w-[60%] rounded-lg border-grey focus:ring-1 focus:ring-white outline-none'
        onChange={handleInputChange}
      />
      <SearchTimeDropDown onPeriodChange={setPeriod} />
    </div>
  );
}
