// MyInput.tsx
import { extendVariants, Input } from '@nextui-org/react';

const CustomInput = extendVariants(Input, {
  variants: {
    custom: {
      true: {
        inputWrapper: [
          'w-full',
          'mt-1',
          'p-1',
          'ring',
          'ring-black/50',
          'focus-within:ring-black',
          'group-data-[focus=true]:ring-black',
          'rounded-sm',
          'bg-white',
          'transition',
          'duration-100',
        ],
        input: ['font-gabarito', 'outline-none', 'text-lg'],
        errorMessage: [
          'text-lg',
          'text-white',
          'font-gabarito-medium',
          'group-hover:text-red',
        ],
      },
    },
  },
  defaultVariants: {
    custom: true,
  },
});

export { CustomInput };
