import { useEffect, useRef, useState } from "react"
import useOutsideClick from "../../../hooks/useOutsideClickHook"

interface OrderStateDropdownProps {
  setOrderState: (orderState: string) => void
}

export default function OrderStateDropDown({setOrderState}: OrderStateDropdownProps) {

  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  })

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeInput);

    return () => {
      document.removeEventListener('keydown', handleEscapeInput);
    }
  }, [])

  const handleEscapeInput = (e: KeyboardEvent) => {
    if (e.key === 'Esc' || e.key === "Escape") {
      setIsOpen(false);
    }
  }

  const handleDropdownClick = (newPeriod : string) => {
    setOrderState(newPeriod)
    setIsOpen(false)
  }

  const handleOnDropDownClick = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div ref={dropdownRef} className="flex flex-col absolute right-0 w-[50%]">
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-grey font-gabarito-medium hover:bg-darker focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between" type="button" onClick={handleOnDropDownClick}>Estado de la orden...<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
      </svg>
      </button>
      { isOpen && (
        <div id="dropdown" className="bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700
        absolute pointer bottom-10 animate-fade-up animate-duration-100 animate-ease-in-out">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 font-gabarito-medium" aria-labelledby="dropdownDefaultButton">
            <li>
              <div onClick={() => handleDropdownClick("En espera")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                En espera
              </div>
            </li>
            <li>
              <div onClick={() => handleDropdownClick("Procesando")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                Procesando
              </div>
            </li>
            <li>
              <div onClick={() => handleDropdownClick("Enviada")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                Enviada
              </div>
            </li>
            <li>
              <div onClick={() => handleDropdownClick("Completada")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                Completada 
              </div>
            </li>
          </ul>
        </div>
        )
      }
    </div>
  )
}