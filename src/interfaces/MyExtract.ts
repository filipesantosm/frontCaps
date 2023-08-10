export interface GetMyExtractResponse {
  payment: ExtractPayment[];
  paymentAccount: ExtractPayment[];
}

export interface ExtractPayment {
  value: number | null;
  date: string;
  type: string;
  quantity: number;
}
