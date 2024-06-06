import { useContext, useEffect, useState } from 'react';
import CartItem from './cart-item';
import CartSummary from './cart-summary';
import { CartContext } from '../../../context/cart-context';
import { CartItemProduct } from '../../../types/shop';

export default function Cart() {

  const [localCart, setLocalCart] = useState<CartItemProduct[]>([]);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setLocalCart(JSON.parse(storedCart));
    }
  }, []);

  const cartToRender = cartContext?.cart.length ? cartContext.cart : localCart;

  return (
    <section className="text-white font-gabarito mx-28 mt-12 h-full mb-auto">
      <div className="flex flex-col w-full">
        <h1 className="font-gabarito-bold text-5xl mb-5">Tu carrito de la compra</h1>
        <p className="font-gabarito text-white/60 ml-1">Revisa y actualiza el contenido de tu carrito antes de realizar la orden</p>
      </div>
      {
        cartToRender.map(cartItem => (
          <CartItem key={cartItem.itemId} cartItem={cartItem} />
        ))
      }
      {localCart.length > 0 && <CartSummary />}
    </section>
  );
}
