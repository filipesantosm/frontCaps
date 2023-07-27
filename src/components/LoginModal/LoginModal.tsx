/* eslint-disable @typescript-eslint/no-empty-function */
import { useOutside } from '@/hooks/useOutside';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoCloseCircleOutline } from 'react-icons/io5';
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

interface Props {
  onClose: () => void;
  onClickSignUp: () => void;
  onClickForgot: () => void;
}

const LoginModal = ({ onClose, onClickSignUp, onClickForgot }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit } = useForm();

  useOutside(contentRef, onClose);

  const onSubmit: SubmitHandler<any> = form => {};

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
          <Input
            label="CPF"
            placeholder="000.000.000-00"
            id="cpf"
            {...register('cpf')}
          />
          <Input
            id="password"
            type="password"
            placeholder="********"
            label="SENHA"
            {...register('password')}
          />
          <TextButton type="button" onClick={onClickForgot}>
            Esqueci minha senha
          </TextButton>
          <SubmitButton>ENTRAR</SubmitButton>
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
