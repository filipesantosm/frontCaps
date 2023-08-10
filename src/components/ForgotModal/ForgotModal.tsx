import { useOutside } from '@/hooks/useOutside';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import {
  ForgotPasswordSchema,
  IForgotPasswordForm,
} from '@/validations/ForgotPasswordSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoCloseCircleOutline } from 'react-icons/io5';
import Input from '../Input/Input';
import Loading from '../Loading/Loading';
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForgotPasswordForm>({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  useOutside(contentRef, onClose);

  const onSubmit: SubmitHandler<any> = async form => {
    setIsSubmitting(true);
    try {
      await api.post('/auth/forgot-password', {
        email: form.email,
      });
      onSuccess();
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
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
            error={errors?.email?.message}
            {...register('email')}
          />
          <SubmitButton disabled={isSubmitting}>
            {isSubmitting ? (
              <Loading iconColor="white" />
            ) : (
              'ENVIAR PARA E-MAIL'
            )}
          </SubmitButton>
          <TextButton type="button" onClick={onClickLogin}>
            Sabe sua senha? Entre na sua conta aqui!
          </TextButton>
        </Form>
      </Content>
    </Container>
  );
};

export default ForgotModal;
