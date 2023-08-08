import { ICartItem } from '@/interfaces/Cart';

export const formatPaymentTitles = (cartItems: ICartItem[]) => {
  const payloadTitles = cartItems.map(cartItem => {
    return {
      id: cartItem.id,
    };
  });

  return payloadTitles;
};
