import Input from '@/components/Input/Input';
import Loading from '@/components/Loading/Loading';
import PageTitle from '@/components/PageTitle/PageTitle';
import api from '@/services/api';
import handleError, { handleSuccess } from '@/utils/handleToast';
import {
  IResetPasswordForm,
  ResetPasswordSchema,
} from '@/validations/ResetPasswordSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Container, Content, Form, SubmitButton } from './styles';

const ResetPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm<IResetPasswordForm>({
    resolver: yupResolver(ResetPasswordSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordConfirmation = watch('passwordConfirmation');

  const onSubmit: SubmitHandler<IResetPasswordForm> = async form => {
    setIsSubmitting(true);
    try {
      const { code } = router.query;

      if (!code) {
        handleError('Código não encontrado!');
        return;
      }

      await api.post(
        '/auth/reset-password',
        {
          code,
          password: form.password,
          passwordConfirmation: form.passwordConfirmation,
        },
        {
          headers: {
            Authorization: '',
          },
        },
      );

      handleSuccess('Senha redefinida com sucesso!');
      router.push({
        pathname: '/',
        query: {
          modal: 'login',
        },
      });
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Content>
        <PageTitle>Redefinir senha</PageTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="NOVA SENHA"
            id="password"
            autoComplete="new-password"
            containerClassName="field"
            type="password"
            error={errors?.password?.message}
            {...register('password', {
              onChange: () => {
                if (passwordConfirmation) {
                  trigger('passwordConfirmation');
                }
              },
            })}
          />
          <Input
            label="CONFIRME NOVA SENHA"
            containerClassName="field"
            id="passwordConfirmation"
            autoComplete="new-password"
            type="password"
            error={errors?.passwordConfirmation?.message}
            {...register('passwordConfirmation')}
          />
          <SubmitButton disabled={isSubmitting}>
            {isSubmitting ? <Loading iconColor="white" /> : 'REDEFINIR SENHA'}
          </SubmitButton>
        </Form>
      </Content>
    </Container>
  );
};

export default ResetPassword;
