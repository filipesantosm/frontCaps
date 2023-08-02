export type ScratchCardStatus = 'unscratched' | 'win' | 'lose';

export interface IScratchCard {
  code: string;
  status: ScratchCardStatus;
}
