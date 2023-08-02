/* eslint-disable @typescript-eslint/no-empty-function */
import { useOutside } from '@/hooks/useOutside';
import { ILoginResponse } from '@/interfaces/Auth';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import { ILoginForm, LoginSchema } from '@/validations/LoginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useAuth } from '@/hooks/useAuth';
import { maskCPF } from '@/utils/masks';
import { IUser } from '@/interfaces/User';
import Input from '../Input/Input';
import {
  CloseButton,
  Container,
  Content,
  Form,
  FormDescription,
  ModalTitle,
  SubmitButton,
  TextButton,
} from './styles';
import MaskedInput from '../Input/MaskedInput';

interface Props {
  onClose: () => void;
  onClickSignUp: () => void;
  onClickForgot: () => void;
}

const LoginModal = ({ onClose, onClickSignUp, onClickForgot }: Props) => {
  const { setUser } = useAuth();
  const contentRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>({
    resolver: yupResolver(LoginSchema),
  });

  useOutside(contentRef, onClose);

  const handleLocalStorage = (data: ILoginResponse) => {
    localStorage.setItem('@MultCapWeb: user', JSON.stringify(data.user));
    localStorage.setItem('@MultCapWeb: accessToken', data.jwt);
  };

  const onSubmit: SubmitHandler<ILoginForm> = async form => {
    setIsSubmitting(true);
    try {
      const { data } = await api.post<ILoginResponse>('/auth/local', {
        identifier: form.cpf,
        password: form.password,
      });

      handleLocalStorage(data);
      setUser(data.user);
      onClose();
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Content ref={contentRef}>
        <ModalTitle>Bem vindo(a) !</ModalTitle>
        <CloseButton type="button" onClick={onClose}>
          <IoCloseCircleOutline />
        </CloseButton>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormDescription>
            Para fazer login na plataforma, preencha com o CPF e senha
            cadastrados.
          </FormDescription>
          <MaskedInput
            label="CPF"
            maskFunction={maskCPF}
            placeholder="000.000.000-00"
            maxLength={14}
            id="cpf"
            error={errors?.cpf?.message}
            {...register('cpf')}
          />
          <Input
            id="password"
            type="password"
            placeholder="********"
            label="SENHA"
            error={errors?.password?.message}
            {...register('password')}
          />
          <TextButton type="button" onClick={onClickForgot}>
            Esqueci minha senha
          </TextButton>
          <SubmitButton disabled={isSubmitting}>ENTRAR</SubmitButton>
          <TextButton
            type="button"
            onClick={onClickSignUp}
            style={{
              textAlign: 'center',
              marginTop: '1rem',
            }}
          >
            Não tem conta? Cadastre-se aqui!
          </TextButton>
        </Form>
      </Content>
    </Container>
  );
};

export default LoginModal;
