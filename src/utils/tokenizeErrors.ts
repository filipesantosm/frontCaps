import { TokenizeError } from '@/interfaces/CreditCard';
import handleError from './handleToast';

const messageByErrorName: Record<string, string> = {
  invalid_card_number: 'Dados do cartão inválidos.',
};

export const handleTokenizeError = (error: TokenizeError) => {
  handleError(messageByErrorName[error.error] || 'Erro ao criar cartão');
};
