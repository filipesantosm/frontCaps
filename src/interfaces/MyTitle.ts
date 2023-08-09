export interface GetMyTitleResponse {
  Ttitulos: ITitle[];
}

export interface ITitle {
  createdAt: null;
  id: number;
  name: null | string;
  number: number;
  updatedAt: string;
  publishedAt: null | string;
  price: null | number;
  luckyNumber: number;
  active: boolean;
  reserved: boolean;
  isWinning: boolean;
  isWinningLuckyNumber: null | boolean;
  dateSale: null | string;
  userId: number;
  cod: null;
  codComplete: string;
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
  e1: null;
  e2: null;
  e3: null;
  e4: null;
  p1: null;
  p2: null;
  p3: null;
  p4: null;
  cd: string;
  drawId: number;
  description: null | string;
  isPayment: boolean;
  isScratchCard: null | boolean;
  quantityScratchCard: null | number;
}
