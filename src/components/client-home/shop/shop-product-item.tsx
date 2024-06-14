import { useContext } from 'react';
import { Product } from '../../../types/http-types';
import { CartItemProduct } from '../../../types/shop';
import { BASE_URL } from '../../../types/constants';
import { useNavigate, useParams } from 'react-router-dom';
import Badge from '../../shared/badge';
import { AuthContext } from '../../../context/auth-context';
import { CartContext } from '../../../context/cart-context';

interface ShopProductsItemProps {
  product: Product;
}

export default function ShopProductsItem({ product }: ShopProductsItemProps) {
  const authContext = useContext(AuthContext);
  const cartContext = useContext(CartContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const isProductInCart = cartContext?.cart.some(
    (item) => item.itemId === product.id
  );

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (authContext?.role !== 'guest') {
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
      navigate('singUpRequest');
    }
  };

  const productDetailsNavigation = () => {
    navigate(`/${id}/client/product/productId=${product.id}`);
  };

  return (
    <div
      onClick={productDetailsNavigation}
      className='h-96 flex flex-col gap-3 bg-dark rounded-lg cursor-pointer hover:drop-shadow-sm group-hover:drop-shadow-neon transition duration-100'
    >
      <div className='h-60 w-full bg-gray-500 rounded-tr-lg rounded-tl-lg'>
        <img
          src={`${BASE_URL}/${product.photo}`}
          alt={product.name}
          className='h-full w-full object-cover rounded-tr-lg rounded-tl-lg'
        />
      </div>
      <div className='relative'>
        <div className='flex gap-5'>
          <p className='text-white ml-5 text-2xl font-gabarito-medium pt-2'>
            {product.name}
          </p>
          <Badge
            styles='mt-2'
            text={product.category}
          />
        </div>
        <p className='text-white/50 mx-5 text-sm font-gabarito pt-2 w-[70%]'>
          {product.short_desc}
        </p>
        <div className='w-full flex justify-center mt-2'>
          <button
            onClick={handleAddToCart}
            disabled={isProductInCart}
            className={`w-[90%] py-1 px-5 mb-3 text-black font-gabarito-medium rounded-md transition duration-100 ${
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
