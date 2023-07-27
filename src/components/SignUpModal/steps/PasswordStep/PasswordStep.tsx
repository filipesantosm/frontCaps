import Input from '@/components/Input/Input';
import {
  IPasswordStepForm,
  PasswordStepSchema,
} from '@/validations/SignUpSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpStepProps } from '../../interfaces';
import { Form, SubmitButton } from '../../styles';

const PasswordStep = ({ onNext }: SignUpStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm<IPasswordStepForm>({
    resolver: yupResolver(PasswordStepSchema),
  });

  const onSubmit: SubmitHandler<IPasswordStepForm> = form => {
    onNext({
      ...form,
    });
  };

  const confirmPassword = watch('confirm_password');

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="SENHA"
        type="password"
        placeholder="*********"
        error={errors?.password?.message}
        {...register('password', {
          onChange: () => {
            if (confirmPassword) {
              trigger('confirm_password');
            }
          },
        })}
      />
      <Input
        label="CONFIRME A SENHA"
        type="password"
        placeholder="*********"
        error={errors?.confirm_password?.message}
        {...register('confirm_password')}
      />
      <SubmitButton>Continuar</SubmitButton>
    </Form>
  );
};

export default PasswordStep;
