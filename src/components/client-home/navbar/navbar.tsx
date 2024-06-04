import React, { useState } from 'react'
import UserCard from '../../user-card/user-card'
import classNames from 'classnames'

export default function Navbar() {

  const [isShop, setIsShop] = useState(true)

  return (
    <nav className='w-full h-16 relative border-b-2 flex justify-center border-white/10'>
      <div className='h-full relative flex flex-col'>
        <div className='h-full flex gap-8 items-center font-gabarito-medium text-xl'>
          <p className='cursor-pointer h-full flex justify-center items-center' onClick={() => setIsShop(true)}>
            Tienda
          </p>
          <p className='cursor-pointer h-full flex justify-center items-center' onClick={() => setIsShop(false)}>
            Carrito
          </p>
        </div>
        <div className={classNames(
          'h-1 w-1/2 left-0 bottom-0 absolute bg-white transition-transform duration-100',
          {
            'translate-x-0': isShop,
            'translate-x-full': !isShop,
          }
        )} />
      </div>
      <div className='absolute flex justify-center items-center right-0 top-0 bottom-0 mr-5'>
        <UserCard />
      </div>
    </nav>
  )
}
