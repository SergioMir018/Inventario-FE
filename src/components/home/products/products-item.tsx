export default function ProductsItem() {
  return (
    <div className='h-[30rem] flex flex-col gap-3 bg-dark rounded-lg hover:drop-shadow-sm group-hover:drop-shadow-neon transition duration-100'>
      <div className='h-60 w-full bg-gray-500 rounded-tr-lg rounded-tl-lg'>
        
      </div>
      <div className="relative">
        <p className='text-white ml-5 text-2xl font-gabarito-medium pt-5'>
          Article#24234
        </p>
        <p className='text-white/60 mx-5 text-sm font-gabarito pt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tenetur quisquam ratione, excepturi nemo unde, perspiciatis dicta a vitae facere cumque non! Velit aliquam ea, tempore quisquam minus accusamus molestiae!
        </p>
        <div className='w-48 ml-5 mt-5 flex justify-between'>
          <button className='py-1 px-5 mb-3 text-white font-gabarito-bold rounded-md hover:bg-white hover:text-black transition duration-100'>Editar</button>
          <button className='py-1 px-5 mb-3 text-white font-gabarito-bold border-2 border-dark rounded-md hover:border-2 hover:border-white hover:text-red transition duration-100'>Eliminar</button>
        </div>
        <p className="text-green text-3xl font-gabarito-bold absolute right-8 bottom-3">$35</p>
      </div>
    </div>
  )
}
