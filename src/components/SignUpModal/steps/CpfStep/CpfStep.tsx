import MaskedInput from '@/components/Input/MaskedInput';
import { maskCPF } from '@/utils/masks';
import { CpfStepSchema, ICpfStepForm } from '@/validations/SignUpSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpStepProps } from '../../interfaces';
import { Form, FormDescription, SubmitButton, TextButton } from '../../styles';

const CpfStep = ({ onNext, onClickLogin, signUpFormData }: SignUpStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICpfStepForm>({
    resolver: yupResolver(CpfStepSchema),
    defaultValues: {
      cpf: signUpFormData.cpf,
    },
  });

  const onSubmit: SubmitHandler<ICpfStepForm> = form => {
    onNext({ ...form });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormDescription>
        Bem vindo(a) ao MTCAP! <br />
        Para se cadastrar, informe seu CPF abaixo:
      </FormDescription>
      <MaskedInput
        label="CPF"
        id="cpf"
        maskFunction={maskCPF}
        maxLength={14}
        placeholder="000.000.000-00"
        error={errors?.cpf?.message}
        {...register('cpf')}
      />
      <SubmitButton>Continuar</SubmitButton>
      <TextButton
        type="button"
        onClick={onClickLogin}
        style={{
          textAlign: 'center',
        }}
      >
        Já tem conta? Entre na sua conta por aqui!
      </TextButton>
    </Form>
  );
};

export default CpfStep;
