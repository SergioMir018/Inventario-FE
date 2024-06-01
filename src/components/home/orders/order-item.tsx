export default function OrderItem() {
  return (
    <div className='w-full h-60 flex justify-between bg-dark rounded-lg hover:drop-shadow-sm group-hover:drop-shadow-neon transition duration-100'>
      <div className='flex flex-col justify-between p-5 w-full'>
        <p className='text-white font-gabarito-medium text-xl'>
          Orden #123456
        </p>
        <div className="w-full flex justify-between">
          <label className='text-white/60 text-md font-gabarito'>
            Nombre del cliente
          </label>
          <p className='text-white text-md font-gabarito'>
            John Doe
          </p>
        </div>
        <div className="w-full flex justify-between">
          <label className='text-white/60 text-md font-gabarito'>
            Fecha de la orden
          </label>
          <p className='text-white text-md font-gabarito'>
            2023-05-01
          </p>
        </div>
        <div className="w-full flex justify-between">
          <label className='text-white/60 text-md font-gabarito'>
            Total
          </label>
          <p className='text-white text-md font-gabarito'>
            $150.99
          </p>
        </div>
        <div className='w-[40%] mt-5 flex gap-5 justify-between'>
          <button className='py-1 px-5 text-white font-gabarito-bold rounded-md border-2 border-dark hover:border-white  transition duration-100'>Detalles</button>
          <button className='py-1 px-5 text-white font-gabarito-bold rounded-md hover:bg-white hover:text-black transition duration-100'>Procesando</button>
          <button className='py-1 px-5  text-white font-gabarito-bold rounded-md hover:bg-white hover:text-black transition duration-100'>Completada</button>
        </div>
      </div>
    </div>
  )
}
