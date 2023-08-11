import * as Yup from 'yup';

export type IContactForm = Yup.InferType<typeof ContactSchema>;

export const ContactSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  phone: Yup.string().required('Telefone é obrigatório'),
  email: Yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  topic: Yup.string().required('Assunto é obrigatório'),
  message: Yup.string().required('Mensagem é obrigatória'),
});
