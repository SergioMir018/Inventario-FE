import { useContext } from 'react';
import { Product } from '../../../types/http-types';
import { CartContext } from '../../../context/cart-context';
import { CartItemProduct } from '../../../types/shop';
import { BASE_URL } from '../../../types/constants,';

interface ShopProductsItemProps {
  product: Product;
}

export default function ShopProductsItem({ product }: ShopProductsItemProps) {
  const cartContext = useContext(CartContext);
  const isProductInCart = cartContext?.cart.some(
    (item) => item.itemId === product.id
  );

  const handleAddToCart = () => {
    if (cartContext?.canShop) {
      if (cartContext && !isProductInCart) {
        const newItem: CartItemProduct = {
          itemId: product.id,
          itemImageUrl: `${BASE_URL}/${product.photo}`,
          itemName: product.name,
          itemPrice: product.price,
          quantity: 1,
        };

        cartContext.addToCart(newItem);
      }
    } else {
      alert('Eres un invitado');
    }
  };

  return (
    <div className='h-96 flex flex-col gap-3 bg-dark rounded-lg cursor-pointer hover:drop-shadow-sm group-hover:drop-shadow-neon transition duration-100'>
      <div className='h-60 w-full bg-gray-500 rounded-tr-lg rounded-tl-lg'>
        <img
          src={`${BASE_URL}/${product.photo}`}
          alt={product.name}
          className='h-full w-full object-cover rounded-tr-lg rounded-tl-lg'
        />
      </div>
      <div className='relative'>
        <p className='text-white ml-5 text-2xl font-gabarito-medium pt-2'>
          {product.name}
        </p>
        <p className='text-white/50 mx-5 text-sm font-gabarito pt-2 w-[70%]'>
          {product.short_desc}
        </p>
        <div className='w-full flex justify-center mt-2'>
          <button
            onClick={handleAddToCart}
            disabled={isProductInCart}
            className={`w-[90%] py-1 px-5 mb-3 text-black font-gabarito-bold rounded-md transition duration-100 ${
              isProductInCart
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-white hover:bg-white/80'
            }`}
          >
            {isProductInCart ? 'Agregado' : 'Agregar al carrito'}
          </button>
        </div>
        <p className='text-green text-3xl font-gabarito-bold absolute right-8 bottom-16'>
          ${product.price}
        </p>
      </div>
    </div>
  );
}
