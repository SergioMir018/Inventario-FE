import { Product } from '../../../types/http-types';
import { BASE_URL } from '../../../types/constants,';
import { useContext } from 'react';
import { CartContext } from '../../../context/cart-context';
import { CartItemProduct } from '../../../types/shop';
import { useNavigate } from 'react-router-dom';

interface ProductDetailProps {
  product: Product | undefined;
}

export default function ProductDetails({ product }: ProductDetailProps) {
  const cartContext = useContext(CartContext);

  const navigate = useNavigate();

  const isProductInCart = cartContext?.cart.some(
    (item) => item.itemId === product?.id
  );

  const handleAddToCart = () => {
    if (cartContext?.canShop) {
      if (product && cartContext && !isProductInCart) {
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
      navigate('singUpRequest');
    }
  };

  return (
    <div className='grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6'>
      <div className='grid gap-4 md:gap-10 items-start'>
        <img
          src={`${BASE_URL}/${product?.photo}`}
          alt={`${product?.name}}`}
          width={800}
          height={450}
          className='aspect-16/9 object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800'
        />
      </div>
      <div className='grid gap-4 md:gap-10 items-start'>
        <div className='grid gap-4'>
          <h1 className='font-bold text-3xl lg:text-4xl'>{product?.name}</h1>
          <div>
            <p>{product?.short_desc}</p>
          </div>
          <div className='text-4xl font-bold text-green'>${product?.price}</div>
        </div>
        <div className='grid gap-4'>
          <h2 className='font-bold text-2xl'>Descripción del producto:</h2>
          <div className='text-white/60 dark:text-gray-400'>
            <p>{product?.desc}</p>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className={`w-full text-black h-14 mt-auto text-xl font-gabarito-bold  rounded-md transition duration-100 ${
            isProductInCart
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-white hover:bg-white/80'
          }`}
        >
          {isProductInCart ? 'Agregado' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  );
}
