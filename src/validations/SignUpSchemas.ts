import * as Yup from 'yup';
import { isValid, parse } from 'date-fns';
import { cpf } from 'cpf-cnpj-validator';

export type ISignUpFormData = ICpfStepForm &
  IPersonalDetailsStepForm &
  IAddressStepForm &
  IPasswordStepForm;

export type ICpfStepForm = Yup.InferType<typeof CpfStepSchema>;

export const CpfStepSchema = Yup.object({
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
});

export type IPersonalDetailsStepForm = Yup.InferType<
  typeof PersonalDetailsStepSchema
>;

export const PersonalDetailsStepSchema = Yup.object({
  name: Yup.string()
    .required('Nome completo é obrigatório')
    .test({
      test: value => {
        if (!value) {
          return false;
        }

        return /^(.+[ ]+)+.+$/.test(value);
      },
      name: 'first-and-last-name',
      message: 'O campo deve conter nome e sobrenome',
    }),
  dateBirth: Yup.string()
    .required('Data de nascimento é obrigatória')
    .test({
      message: 'Data inválida',
      test: value => {
        if (!value) {
          return false;
        }

        const parsedDate = parse(value, 'yyyy-MM-dd', new Date());

        if (!parsedDate || !isValid(parsedDate)) {
          return false;
        }

        return true;
      },
    }),
  email: Yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  phone: Yup.string()
    .required('Telefone obrigatório')
    .test({
      message: 'Telefone inválido',
      test: value => {
        if (!value) {
          return false;
        }

        if (value.length < 14) {
          return false;
        }

        return true;
      },
    }),
});

export type IAddressStepForm = Yup.InferType<typeof AddressStepSchema>;

export const AddressStepSchema = Yup.object({
  cep: Yup.string()
    .required('CEP é obrigatório')
    .length(9, 'CEP inválido')
    .test({
      message: 'CEP inválido',
      test: value => /^\d{5}-\d{3}$/.test(value || ''),
    }),
  state: Yup.string().required('Estado é obrigatório'),
  city: Yup.string().required('Cidade é obrigatória'),
  neighborhood: Yup.string().required('Bairro é obrigatório'),
  street: Yup.string().required('Rua é obrigatória'),
  number: Yup.string().required('Número é obrigatório'),
  cityCodIBGE: Yup.string().optional(),
  stateCodIBGE: Yup.string().optional(),
});

export type IPasswordStepForm = Yup.InferType<typeof PasswordStepSchema>;

export const PasswordStepSchema = Yup.object({
  password: Yup.string().required('Senha obrigatória'),
  confirm_password: Yup.string()
    .required('Confirmação de senha obrigatória')
    .oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais'),
});
