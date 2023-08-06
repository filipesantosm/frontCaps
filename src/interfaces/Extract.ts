export interface GetExtractResponse {
  credits: Credit[];
  totalCredit: number;
  debts: Credit[];
  totalDebt: number;
  pending: Credit[];
  totalCreditPendding: number;
  balance: number;
}

export interface Credit {
  id: number;
  observation: null | string;
  value: number;
  isCredit: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  dateValidate: null | string;
  isExpired: boolean;
  dateExpired: null | string;
  isPayment: boolean;
  origin: string;
}
