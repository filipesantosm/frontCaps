/* eslint-disable react/jsx-no-constructed-context-values */
import { ICartItem } from '@/interfaces/Cart';
import { createContext, useContext, useState } from 'react';

interface CartContextData {
  cartItems: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (code: string) => void;
}

const CartContext = createContext({} as CartContextData);

interface Props {
  children: React.ReactNode;
}

const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const addToCart = (cartItem: ICartItem) => {
    setCartItems(prev => {
      if (prev.find(item => item.code === cartItem.code)) {
        return prev;
      }

      return [...prev, cartItem];
    });
  };

  const removeFromCart = (code: string) => {
    setCartItems(prev => prev.filter(item => item.code !== code));
  };

  return (
    <CartContext.Provider value={{ cartItems, removeFromCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
