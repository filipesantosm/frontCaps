import Layout from '@/components/Layout/Layout';
import { useState } from 'react';
import PageTitle from '@/components/PageTitle/PageTitle';
import Input from '@/components/Input/Input';
import handleError from '@/utils/handleToast';
import SuccessModal from '@/components/SuccessModal/SuccessModal';
import { theme } from '@/styles/theme';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  INewPasswordForm,
  IOldPasswordForm,
  NewPasswordSchema,
  OldPasswordSchema,
} from '@/validations/ChangePasswordSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '@/services/api';
import { useAuth } from '@/hooks/useAuth';
import { Form, FormDescription, PageContent, SubmitButton } from './styles';

const ChangePassword = () => {
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { user } = useAuth();

  const {
    register: registerOld,
    handleSubmit: handleSubmitOld,
    formState: { errors: errorsOld },
    reset: resetOld,
    getValues: getValuesOld,
  } = useForm<IOldPasswordForm>({
    resolver: yupResolver(OldPasswordSchema),
  });

  const {
    register: registerNew,
    handleSubmit: handleSubmitNew,
    formState: { errors: errorsNew },
    trigger: triggerNew,
    reset: resetNew,
    watch: watchNew,
  } = useForm<INewPasswordForm>({
    resolver: yupResolver(NewPasswordSchema),
    mode: 'onChange',
  });

  const handleCheckPassword: SubmitHandler<IOldPasswordForm> = async form => {
    try {
      await api.post('/auth/local', {
        password: form.old_password,
        identifier: user.username,
      });

      setPasswordCorrect(true);
    } catch (error) {
      handleError('Senha incorreta');
    }
  };

  const handleChangePassword: SubmitHandler<INewPasswordForm> = async form => {
    try {
      const oldPassword = getValuesOld('old_password');

      await api.post('/auth/change-password', {
        currentPassword: oldPassword,
        password: form.new_password,
        passwordConfirmation: form.confirm_password,
      });

      resetOld();
      resetNew();
      setShowSuccessModal(true);
      setPasswordCorrect(false);
    } catch (error) {
      handleError(error);
    }
  };

  const confirmPassword = watchNew('confirm_password');

  return (
    <Layout>
      <PageContent>
        <PageTitle>Alterar senha</PageTitle>
        {passwordCorrect ? (
          <Form
            onSubmit={handleSubmitNew(handleChangePassword)}
            key="new-password"
          >
            <FormDescription>
              Agora digite a nova senha que deseja e a confirme.
            </FormDescription>
            <Input
              label="NOVA SENHA"
              type="password"
              containerClassName="change-password-field"
              error={errorsNew?.new_password?.message}
              {...registerNew('new_password', {
                onChange: () => {
                  if (confirmPassword) {
                    triggerNew('confirm_password');
                  }
                },
              })}
            />
            <Input
              label="CONFIRME NOVA SENHA"
              type="password"
              containerClassName="change-password-field"
              error={errorsNew?.confirm_password?.message}
              {...registerNew('confirm_password')}
            />
            <SubmitButton>Próximo</SubmitButton>
          </Form>
        ) : (
          <Form
            onSubmit={handleSubmitOld(handleCheckPassword)}
            key="old-password"
          >
            <FormDescription>
              Para fazer a alteração da senha, por favor, digite sua senha
              antiga para prosseguir.
            </FormDescription>
            <Input
              label="SENHA ATUAL"
              type="password"
              containerClassName="change-password-field"
              error={errorsOld.old_password?.message}
              {...registerOld('old_password')}
            />
            <SubmitButton>Próximo</SubmitButton>
          </Form>
        )}
      </PageContent>
      {showSuccessModal && (
        <SuccessModal
          message="Sua senha foi alterada"
          onClose={() => setShowSuccessModal(false)}
          iconColor={theme.colors.primary}
        />
      )}
    </Layout>
  );
};

export default ChangePassword;
