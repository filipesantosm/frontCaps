import Input from '@/components/Input/Input';
import {
  IPersonalDetailsStepForm,
  PersonalDetailsStepSchema,
} from '@/validations/SignUpSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import MaskedInput from '@/components/Input/MaskedInput';
import { maskPhone } from '@/utils/masks';
import { SignUpStepProps } from '../../interfaces';
import { Form, SubmitButton } from '../../styles';

const PersonalDetailsStep = ({ onNext, signUpFormData }: SignUpStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPersonalDetailsStepForm>({
    resolver: yupResolver(PersonalDetailsStepSchema),
    defaultValues: {
      ...signUpFormData,
    },
  });

  const onSubmit: SubmitHandler<IPersonalDetailsStepForm> = form => {
    onNext({ ...form });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input label="CPF" defaultValue={signUpFormData.cpf} readOnly />
      <Input
        id="name"
        label="NOME COMPLETO"
        {...register('name')}
        error={errors?.name?.message}
      />
      <Input
        id="dateBirth"
        type="date"
        label="DATA DE NASCIMENTO"
        error={errors?.dateBirth?.message}
        {...register('dateBirth')}
      />
      <Input
        id="email"
        label="E-MAIL"
        type="email"
        {...register('email')}
        error={errors?.email?.message}
      />
      <MaskedInput
        id="phone"
        maskFunction={maskPhone}
        maxLength={15}
        label="TELEFONE"
        {...register('phone')}
        error={errors?.phone?.message}
      />
      <SubmitButton>Continuar</SubmitButton>
    </Form>
  );
};

export default PersonalDetailsStep;
