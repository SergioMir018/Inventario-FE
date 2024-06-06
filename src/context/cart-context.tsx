import { createContext, useState, ReactNode, useEffect } from 'react';
import {CartItemProduct} from '../types/shop'

interface CartContextType {
  cart: CartItemProduct[];
  setCart: React.Dispatch<React.SetStateAction<CartItemProduct[]>>;
  addToCart: (item: CartItemProduct) => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemProduct[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItemProduct) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem.itemId !== id));
  };

  const incrementQuantity = (id: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.itemId === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.itemId === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
