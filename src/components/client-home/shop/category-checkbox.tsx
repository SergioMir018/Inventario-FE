import { Checkbox } from '@nextui-org/react';

interface CategoryCheckboxProps {
  category: string;
}

export default function CategoryCheckbox({category}: CategoryCheckboxProps) {
  return (
    <Checkbox color='success' value={category}>
      <label className='text-white'>{category}</label>
    </Checkbox>
  );
}
