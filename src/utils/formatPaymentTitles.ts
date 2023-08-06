import { ICartItem } from '@/interfaces/Cart';

export const formatPaymentTitles = (cartItems: ICartItem[]) => {
  const payloadTitles = cartItems.map(cartItem => {
    const digitsObject = Object.fromEntries(
      cartItem.digits.map(digit => [digit.key, digit.number]),
    );

    const excludeObject = Object.fromEntries(
      cartItem.digitsToExclude.map((digit, index) => [
        `e${index + 1}`,
        digit.number,
      ]),
    );

    return {
      id: cartItem.id,
      ...digitsObject,
      ...excludeObject,
    };
  });

  return payloadTitles;
};
