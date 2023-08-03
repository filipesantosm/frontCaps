export interface GetUserWinningResponse {
  Premiados: IWinner[];
}

export interface IWinner {
  name: string;
  city: string;
  seller: string;
  points: string;
  title: number;
  type: string;
  premium: string;
  value: number;
  premiumNumber: number;
  titlePremium: Record<string, number>;
}
