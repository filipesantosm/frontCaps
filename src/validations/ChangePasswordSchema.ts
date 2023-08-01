import * as Yup from 'yup';

export type IOldPasswordForm = Yup.InferType<typeof OldPasswordSchema>;

export const OldPasswordSchema = Yup.object({
  old_password: Yup.string().required('Senha atual obrigatória'),
});

export type INewPasswordForm = Yup.InferType<typeof NewPasswordSchema>;

export const NewPasswordSchema = Yup.object({
  new_password: Yup.string().required('Senha obrigatória'),
  confirm_password: Yup.string()
    .required('Confirme a senha')
    .oneOf([null, Yup.ref('new_password')], 'As senhas não coincidem'),
});
