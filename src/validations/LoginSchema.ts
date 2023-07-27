import * as Yup from 'yup';
import { cpf } from 'cpf-cnpj-validator';

export type ILoginForm = Yup.InferType<typeof LoginSchema>;

export const LoginSchema = Yup.object({
  cpf: Yup.string()
    .required('CPF é obrigatório')
    .test({
      test: value => {
        if (!value) {
          return false;
        }

        return cpf.isValid(value);
      },
      message: 'CPF inválido',
    }),
  password: Yup.string().required('Senha é obrigatória'),
});
