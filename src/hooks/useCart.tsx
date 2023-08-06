/* eslint-disable react/jsx-no-constructed-context-values */
import { ICartItem } from '@/interfaces/Cart';
import { createContext, useContext, useState } from 'react';

interface CartContextData {
  cartItems: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: number) => void;
  updateCartItem: (cartItem: ICartItem) => void;
  toggleCartItem: (item: ICartItem) => void;
}

const CartContext = createContext({} as CartContextData);

interface Props {
  children: React.ReactNode;
}

const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const addToCart = (cartItem: ICartItem) => {
    setCartItems(prev => {
      if (prev.find(item => item.id === cartItem.id)) {
        return prev;
      }

      return [...prev, cartItem];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleCartItem = (cartItem: ICartItem) => {
    if (cartItems.find(item => item.id === cartItem.id)) {
      setCartItems(prev => prev.filter(item => item.id !== cartItem.id));
      return;
    }

    setCartItems(prev => [...prev, cartItem]);
  };

  const updateCartItem = (cartItem: ICartItem) => {
    setCartItems(prev =>
      prev.map(item => (item.id === cartItem.id ? cartItem : item)),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        removeFromCart,
        addToCart,
        toggleCartItem,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
