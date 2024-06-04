import TrashIcon from '../../../icons/trash-icon'

export default function CartItem() {
  return (
    <div className='w-full h-32 rounded-md bg-dark flex justify-between my-4'>
      <div className='flex'>
        <div className='bg-metal h-full w-32 rounded-md'></div>
        <div className='h-full flex flex-col justify-center ml-5'>
          <h3 className='font-gabarito-medium text-xl'>Product#4234</h3>
          <p className='text-lg'>$235</p>
        </div>
      </div>
      <div className='w-72 mr-5 h-full flex justify-between items-center'>
        <button className='border border-white/60 w-12 h-10 py-1 text-2xl font-gabarito-bold rounded-md hover:bg-white hover:text-black transition duration-100'>+</button>
        <p className='font-gabarito-medium text-2xl'>1</p>
        <button className='border border-white/60 w-12 h-10 py-1 text-2xl font-gabarito-bold rounded-md hover:bg-white hover:text-black transition duration-100'>-</button>

        <button className='border border-white/60 w-16 h-10 flex justify-center items-center rounded-md hover:bg-white hover:text-red transition duration-100'><TrashIcon /></button>
      </div>
    </div>
  )
}
