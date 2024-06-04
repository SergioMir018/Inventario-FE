import React from 'react'

export default function CartSummary() {
  return (
    <div className='w-full rounded-md flex justify-between my-4 px-2'>
      <div className='flex flex-col mt-auto'>
        <h3 className='font-gabarito-medium text-xl'>Total</h3>
        <p className='font-gabarito-bold text-4xl'>$1423</p>
      </div>
      <button className='bg-white text-black h-14 w-48 mt-auto text-xl font-gabarito-medium rounded-md hover:bg-white/80 transition duration-100'>Checkout</button>
    </div>
  )
}
