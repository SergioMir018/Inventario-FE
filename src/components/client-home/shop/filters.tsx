import CategoryCheckbox from './category-checkbox';

export default function Filters() {
  return (
    <div className='bg-dark h-[30rem] w-full mr-10 rounded-md'>
      <h2 className='text-2xl mt-5 ml-5 font-gabarito-medium'>Filtros</h2>
      <div className='w-full text-lg flex flex-col ml-5 mt-4'>
        <h3 className='text-white/80'>Categorías</h3>
        <CategoryCheckbox />
        <CategoryCheckbox />
        <CategoryCheckbox />
        <CategoryCheckbox />
        <CategoryCheckbox />
      </div>
      <div className='w-full text-lg flex flex-col mt-3'>
        <h2 className='text-white/80 ml-5'>Precio</h2>
        <div className='flex mx-5 justify-between'>
          <input
            type='text'
            className='w-40 px-2 border-2 rounded-sm border-white/10 bg-transparent outline-none focus:border-white transform duration-75 ease-in-out'
            placeholder='Precio min'
          />
          <input
            type='text'
            className='w-40 px-2 border-2 rounded-sm border-white/10 bg-transparent outline-none focus:border-white transform duration-75 ease-in-out'
            placeholder='Precio max'
          />
        </div>
      </div>
    </div>
  );
}
