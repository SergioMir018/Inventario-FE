import { useState } from "react";
import OrderStateDropDown from "./order-state-dropdown";

export default function OrderItem() {
  const [orderState, setOrderState] = useState("Estado de la orden...")


  return (
    <div className='w-full h-60 flex justify-between bg-dark rounded-lg hover:drop-shadow-sm hover:drop-shadow-neon transition duration-100'>
      <div className='flex flex-col justify-between p-5 w-full'>
        <div className="w-full flex justify-between">
          <p className='text-white font-gabarito-medium text-xl'>
            Orden #123456
          </p>
        </div>
        <div className="w-full flex justify-between">
          <label className='text-white/50 text-md font-gabarito'>
            Nombre del cliente
          </label>
          <p className='text-white text-md font-gabarito'>
            John Doe
          </p>
        </div>
        <div className="w-full flex justify-between">
          <label className='text-white/50 text-md font-gabarito'>
            Fecha de la orden
          </label>
          <p className='text-white text-md font-gabarito'>
            2023-05-01
          </p>
        </div>
        <div className="w-full flex justify-between">
          <label className='text-white/50 text-md font-gabarito'>
            Total
          </label>
          <p className='text-white text-md font-gabarito'>
            $150.99
          </p>
        </div>
        <div className='w-full mt-5 flex gap-5 justify-end relative'>
          <button className='py-1 px-5 text-white font-gabarito-bold rounded-md border-2 border-dark hover:border-white  transition duration-100 absolute left-0 bottom-0'>Detalles</button>
          <div className="flex flex-col gap-1 w-[50%]">
            <label className='text-white/50 text-md font-gabarito'>
              Estado de la orden:
            </label>
            <OrderStateDropDown setOrderState={setOrderState} order={orderState} />
          </div>
        </div>
      </div>
    </div>
  )
}
