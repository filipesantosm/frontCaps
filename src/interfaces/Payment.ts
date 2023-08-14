export interface PixPaymentResponse {
  UUID: string;
  charge_id: number;
  qrcode_image: string;
  qrcode: string;
  dateExpiration: string;
}
