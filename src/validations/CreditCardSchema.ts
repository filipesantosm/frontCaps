import * as Yup from 'yup';

import { parse, isValid } from 'date-fns';

export const isDateStringValid = (text: string, format: string) => {
  if (!text) {
    return false;
  }

  const date = parse(text, format, new Date());

  return isValid(date);
};

export type ICreditCardForm = Yup.InferType<typeof CreditCardSchema>;

export const CreditCardSchema = Yup.object({
  card_number: Yup.string()
    .required('Preencha os campos necessários')
    .matches(/^[0-9 ]+$/, 'O campo deve conter apenas números')
    .length(19, 'O campo deve conter 16 dígitos')
    .typeError('O campo deve conter apenas números'),
  date: Yup.string()
    .required('Preencha os campos necessários')
    .length(5, 'Validade inválida')
    .test('date_valid', 'Validade inválida', value => {
      return isDateStringValid(value || '', 'MM/yy');
    }),
  cvv: Yup.string()
    .required('Preencha os campos necessários')
    .matches(/^[0-9]+$/, 'O campo deve conter apenas números')
    .length(3, 'O campo deve conter 3 dígitos'),
  name: Yup.string().required('Preencha os campos necessários'),
  save_card: Yup.boolean().optional().typeError(''),
});
