export default function ShopProductsItem() {
  return (
    <div className='h-[20rem] flex flex-col gap-3 bg-dark rounded-lg cursor-pointer hover:drop-shadow-sm group-hover:drop-shadow-neon transition duration-100'>
      <div className='h-60 w-full bg-gray-500 rounded-tr-lg rounded-tl-lg'>

      </div>
      <div className="relative">
        <p className='text-white ml-5 text-2xl font-gabarito-medium pt-2'>
          Article#24234
        </p>
        <p className='text-white/50 mx-5 text-sm font-gabarito pt-2 w-[70%]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <div className="w-full flex justify-center mt-2">
          <button className='w-[90%] py-1 px-5 mb-3 text-black font-gabarito-bold rounded-md bg-white hover:bg-white/80 transition duration-100'>Agregar al carrito </button>
        </div>
        <p className="text-green text-3xl font-gabarito-bold absolute right-8 bottom-16">$35</p>
      </div>
    </div>
  )
}
