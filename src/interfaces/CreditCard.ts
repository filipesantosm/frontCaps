export interface TokenizeResponse {
  code: number;
  data: {
    card_mask: string;
    payment_token: string;
  };
}

export interface TokenizeError {
  code: number;
  error: string;
  error_description: string;
}

export interface UserCard {
  id: number;
  createdAt: string;
  tokencard: string;
  lastDig: string;
  branch: string;
}
