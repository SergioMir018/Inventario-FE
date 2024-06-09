import { createContext, useState, ReactNode, useEffect } from 'react';
import { CartItemProduct } from '../types/shop';

interface CartContextType {
  cart: CartItemProduct[];
  canShop: boolean;
  setCart: React.Dispatch<React.SetStateAction<CartItemProduct[]>>;
  setCanShop: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (item: CartItemProduct) => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  calculateTotal: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemProduct[]>([]);
  const [canShop, setCanShop] = useState<boolean>(false);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const storedCanShop = localStorage.getItem('canShop');
    if (storedCart && storedCanShop) {
      setCart(JSON.parse(storedCart));
      setCanShop(JSON.parse(storedCanShop) === true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('canShop', JSON.stringify(canShop));
  }, [canShop, cart]);

  const addToCart = (item: CartItemProduct) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.itemId !== id)
    );
  };

  const incrementQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.itemId === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.itemId === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.itemPrice * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        canShop,
        setCart,
        setCanShop,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
