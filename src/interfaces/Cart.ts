export interface ITitle {
  id: number;
  number: number;
  luckyNumber: number;
  d1: number;
  d2: number;
  d3: number;
  d4: number;
  d5: number;
  d6: number;
  d7: number;
  d8: number;
  d9: number;
  d10: number;
  d11: number;
  d12: number;
  d13: number;
  d14: number;
  d15: number;
  d16: number;
  d17: number;
  d18: number;
  d19: number;
  d20: number;
}

export interface CartItemDigit {
  key: string;
  number: number;
}

export interface ICartItem {
  id: number;
  number: number;
  luckyNumber: number;
  digits: CartItemDigit[];
  digitsToExclude: CartItemDigit[];
}
