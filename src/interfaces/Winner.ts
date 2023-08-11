export interface GetUserWinningResponse {
  entriesCategorie1: WinnersDrawPremium[];
  entriesCategorie2: WinnersDrawPremium[];
  entriesCategorie3: WinnersDrawPremium[];
}

export interface WinnersDrawPremium {
  createdAt: string;
  id: number;
  value: number;
  updatedAt: string;
  publishedAt: null | string;
  active: boolean | null;
  number: number;
  description: string;
  title: string;
  isDetach: boolean | null;
  idTtitle: null;
  idUser: null;
  totalPay: number;
  payWinning: number;
  refer: string;
  dezena: string;
  draw_premium_winnings: DrawPremiumWinning[];
}

export interface DrawPremiumWinning {
  id: number;
  title: string;
  name: string;
  adress: string;
  city: string;
  seller: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
