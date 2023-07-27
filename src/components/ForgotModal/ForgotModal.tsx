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
  onSuccess: () => void;
  onClickLogin: () => void;
}

const ForgotModal = ({ onClose, onSuccess, onClickLogin }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit } = useForm();

  useOutside(contentRef, onClose);

  const onSubmit: SubmitHandler<any> = form => {
    onSuccess();
  };

  return (
    <Container>
      <Content ref={contentRef}>
        <ModalTitle>ESQUECI MINHA SENHA</ModalTitle>
        <CloseButton type="button" onClick={onClose}>
          <IoCloseCircleOutline />
        </CloseButton>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormDescription>
            Para recuperar sua senha, informe o e-mail cadastrado na nossa
            plataforma para que possamos enviar sua nova senha por ele.
          </FormDescription>
          <Input
            label="E-MAIL"
            placeholder="email@email.com"
            id="email"
            type="email"
            {...register('email')}
          />
          <SubmitButton>ENVIAR PARA E-MAIL</SubmitButton>
          <TextButton type="button" onClick={onClickLogin}>
            Sabe sua senha? Entre na sua conta aqui!
          </TextButton>
        </Form>
      </Content>
    </Container>
  );
};

export default ForgotModal;
