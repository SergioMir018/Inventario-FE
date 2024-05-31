export default function OrderItem() {
  return (
    <div className='w-full min-h-40 flex justify-between bg-dark rounded-lg'>
      <div className='flex flex-col justify-between pt-3 pl-5 w-[50%]'>
        <p className='text-white font-gabarito-medium text-2xl'>
          Orden #123456
        </p>
        <p className='text-white text-sm font-gabarito-medium pt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam placeat vel possimus odit! Vero itaque sequi voluptatem architecto omnis deserunt quibusdam quam asdfaaasdfasdfasdfasdfadsfasdf
          asdfasdfasdf
          sadfasdfasdfasdfasdf
          asdfasdfasdfasdfasdfasdfasdfa
          fasdfasdfasfadfadfadsf
          asdfadsfasdfadsfadsfadsf
          asdfadfafadsffadfadfadfadsfgajhkjafgjaenglk;sgss
          gagjahfighafghdkghakhglkadfglkafjga
          afkjafhgkjhafkjhadfjghafdjhhic similique provident, minus rem earum facere quidem!
        </p>
        <div className='w-[40%] mt-5 flex justify-between'>
          <button className='py-1 px-5 mb-3 text-white font-gabarito-bold rounded-md hover:bg-white hover:text-black transition duration-100'>Procesando</button>
          <button className='py-1 px-5 mb-3 text-white font-gabarito-bold rounded-md hover:bg-white hover:text-black transition duration-100'>Completada</button>
        </div>
      </div>
      <div className='min-h-40 w-60 bg-gray-500 rounded-tr-lg rounded-br-lg' />
    </div>
  )
}
