import * as Yup from 'yup';

export type IForgotPasswordForm = Yup.InferType<typeof ForgotPasswordSchema>;

export const ForgotPasswordSchema = Yup.object({
  email: Yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
});
