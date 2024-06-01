export default function ProductsItem() {
  return (
    <div className='h-96 flex flex-col justify-between bg-dark rounded-lg hover:drop-shadow-sm group-hover:drop-shadow-neon transition duration-100'>
      <div className='h-32 w-full bg-gray-500 rounded-tr-lg rounded-tl-lg'>
        
      </div>
      <p className='text-white ml-5 text-2xl font-gabarito-medium pt-5'>
        Article#24234
      </p>
      <div className='w-48 ml-5 mt-5 flex justify-between'>
        <button className='py-1 px-5 mb-3 text-white font-gabarito-bold rounded-md hover:bg-white hover:text-black transition duration-100'>Editar</button>
        <button className='py-1 px-5 mb-3 text-white font-gabarito-bold rounded-md hover:bg-white hover:text-red transition duration-100'>Eliminar</button>
      </div>
    </div>
  )
}
