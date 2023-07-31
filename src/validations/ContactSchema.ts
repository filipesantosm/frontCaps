import * as Yup from 'yup';

export type IContactForm = Yup.InferType<typeof ContactSchema>;

export const ContactSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  phone: Yup.string().optional(),
  email: Yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  topic: Yup.string().optional(),
  message: Yup.string().required('Mensagem é obrigatória'),
});
