import React from 'react'

interface PopUpProps {
  children: React.ReactNode
}

export default function PopUp({children}: PopUpProps) {
  return (

    <div className="absolute w-screen h-screen bg-black/70 z-30 flex justify-center items-center text-white font-gabarito animate-fade animate-duration-100 animate-ease-in-out">
      {children}
      </div>
  )
}
