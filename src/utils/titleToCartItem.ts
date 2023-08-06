import { ICartItem, ITitle } from '@/interfaces/Cart';

export const titleToCartItem = (title: ITitle): ICartItem => {
  const digits = Object.entries(title)
    .filter(([key]) => key.startsWith('d'))
    .map(([key, value]) => ({
      key: key?.toString(),
      number: value,
    }));

  return {
    digits,
    digitsToExclude: [],
    id: title.id,
    luckyNumber: title.luckyNumber,
    number: title.number,
  };
};
