import { useNavigate } from "react-router-dom"

export default function AddButton() {

  const navigate = useNavigate()

  const handleAddProductClick = () => {
    navigate('addProduct')
  }

  return (
    <button
      className='w-20 h-20 flex justify-center items-center rounded-full bg-dark font-gabarito-bold text-5xl text-white border-2 border-white fixed bottom-5 right-14 hover:bg-white hover:text-black transition duration-100'
      onClick={handleAddProductClick}
      >
        +
      </button>
  )
}
