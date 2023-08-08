export interface ICreditSaleValue {
  id: number;
  attributes: CreditSaleValueAttributes;
}

export interface CreditSaleValueAttributes {
  name: string;
  value: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface CreateCreditResponse {
  ourNumber: string;
}
