import { useAuth } from '@/hooks/useAuth';
import { useOutside } from '@/hooks/useOutside';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import {
  DeleteAccountSchema,
  IDeleteAccountForm,
} from '@/validations/DeleteAccountSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoIosWarning } from 'react-icons/io';
import Input from '../Input/Input';
import {
  Attention,
  Container,
  Content,
  ContinueButton,
  DeleteAccountButton,
  Form,
  IconWrapper,
  PasswordTitle,
  PromptMessage,
  PromptQuestion,
  Separator,
} from './styles';

interface Props {
  onSuccess: () => void;
  onClose: () => void;
}

const DeleteAccountModal = ({ onSuccess, onClose }: Props) => {
  const { user } = useAuth();
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDeleteAccountForm>({
    resolver: yupResolver(DeleteAccountSchema),
  });
  const contentRef = useRef<HTMLDivElement>(null);

  const onSubmit: SubmitHandler<IDeleteAccountForm> = async form => {
    try {
      await checkPassword(form.password);

      await deleteAccount();

      setShowPasswordForm(false);
      onSuccess();
    } catch (error) {
      handleError(error);
    }
  };

  const checkPassword = async (password: string) => {
    try {
      await api.post('/auth/local', {
        password,
        identifier: user.username,
      });
    } catch (error) {
      throw new Error('Senha inválida');
    }
  };

  const deleteAccount = async () => {
    await api.delete('/UserDelete');
  };

  useOutside(contentRef, onClose);

  return (
    <Container>
      <Content ref={contentRef}>
        {showPasswordForm ? (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <PasswordTitle>Digite sua senha</PasswordTitle>
            <PromptMessage
              style={{
                textAlign: 'left',
              }}
            >
              Informe sua senha para poder confirmar a exclusão de conta
            </PromptMessage>
            <Input
              label="SENHA"
              type="password"
              containerClassName="password-field"
              error={errors?.password?.message}
              {...register('password')}
            />
            <Separator
              style={{
                marginTop: 'auto',
              }}
            />
            <DeleteAccountButton>Excluir conta</DeleteAccountButton>
          </Form>
        ) : (
          <>
            <IconWrapper>
              <IoIosWarning />
            </IconWrapper>
            <Attention>ATENÇÃO!</Attention>
            <PromptQuestion>
              Tem certeza que deseja excluir sua conta?
            </PromptQuestion>
            <PromptMessage>
              Todos seus dados serão excluídos do nosso sistema. Para ter acesso
              novamente à plataforma terá que ser feito um novo cadastro.
            </PromptMessage>
            <Separator />
            <ContinueButton
              type="button"
              onClick={() => setShowPasswordForm(true)}
            >
              Continuar
            </ContinueButton>
          </>
        )}
      </Content>
    </Container>
  );
};

export default DeleteAccountModal;
