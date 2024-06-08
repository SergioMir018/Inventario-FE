import { useContext } from 'react';
import TrashIcon from '../../../icons/trash-icon';
import { CartContext } from '../../../context/cart-context';
import { CartItemProduct } from '../../../types/shop';

interface CartItemProps {
  cartItem: CartItemProduct;
}

export default function CartItem({ cartItem }: CartItemProps) {
  const cartContext = useContext(CartContext);

  const handleCartItemDelete = (id: string) => {
    cartContext?.removeFromCart(id);
    window.location.reload();
  };

  const handleIncrementQuantity = (id: string) => {
    cartContext?.incrementQuantity(id);
  };

  const handleDecrementQuantity = (id: string) => {
    cartContext?.decrementQuantity(id);
  };

  return (
    <div className='w-full h-32 rounded-md bg-dark flex justify-between my-4'>
      <div className='flex'>
        <div className='bg-metal h-full w-32 rounded-md'>
          <img
            src={`${cartItem.itemImageUrl}`}
            alt={cartItem.itemName}
            className='h-full w-full object-cover rounded-tr-lg rounded-tl-lg'
          />
        </div>
        <div className='h-full flex flex-col justify-center ml-5'>
          <h3 className='font-gabarito-medium text-xl'>{cartItem.itemName}</h3>
          <p className='text-lg'>${cartItem.itemPrice}</p>
        </div>
      </div>
      <div className='w-72 mr-5 h-full flex justify-between items-center'>
        <button
          onClick={() => handleIncrementQuantity(cartItem.itemId)}
          className='border border-white/60 w-12 h-10 py-1 text-2xl font-gabarito-bold rounded-md hover:bg-white hover:text-black transition duration-100'
        >
          +
        </button>
        <p className='font-gabarito-medium text-2xl'>{cartItem.quantity}</p>
        <button
          onClick={() => handleDecrementQuantity(cartItem.itemId)}
          className='border border-white/60 w-12 h-10 py-1 text-2xl font-gabarito-bold rounded-md hover:bg-white hover:text-black transition duration-100'
        >
          -
        </button>
        <button
          onClick={() => handleCartItemDelete(cartItem.itemId)}
          className='border border-white/60 w-16 h-10 flex justify-center items-center rounded-md hover:bg-white hover:text-red transition duration-100'
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}
