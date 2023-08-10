import * as Yup from 'yup';

export type IResetPasswordForm = Yup.InferType<typeof ResetPasswordSchema>;

export const ResetPasswordSchema = Yup.object({
  password: Yup.string().required('Nova senha é obrigatória'),
  passwordConfirmation: Yup.string()
    .required('Confirme a nova senha')
    .oneOf([null, Yup.ref('password')], 'As senhas não coincidem'),
});
