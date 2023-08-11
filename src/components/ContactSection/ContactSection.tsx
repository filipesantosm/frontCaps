import api from '@/services/api';
import handleError, { handleSuccess } from '@/utils/handleToast';
import { maskPhone } from '@/utils/masks';
import { ContactSchema, IContactForm } from '@/validations/ContactSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input/Input';
import MaskedInput from '../Input/MaskedInput';
import Loading from '../Loading/Loading';
import TextArea from '../TextArea/TextArea';
import {
  CardText,
  CardTitle,
  ContactCard,
  ContactColumn,
  ContactContainer,
  ContactForm,
  ContactTitle,
  InputsContainer,
  SubmitButton,
} from './styles';

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactForm>({
    resolver: yupResolver(ContactSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<IContactForm> = async form => {
    setIsSubmitting(true);

    const payload = {
      data: {
        subject: form.topic,
        name: form.name,
        email: form.email,
        phone: form.phone,
        question: form.message,
      },
    };

    try {
      await api.post('/user-supports', payload);

      reset();
      handleSuccess('Mensagem enviada com sucesso!');
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ContactTitle>Ainda precisa de ajuda?</ContactTitle>
      <ContactContainer>
        <ContactColumn>
          <ContactCard>
            <CardTitle>Entre em contato com nosso suporte</CardTitle>
            <br />
            <CardText>faleconosco@mtcap.com.br</CardText>
            <br />
            <CardText>(65) 3055-1100</CardText>
            <br />
            <CardText> (65) 3365-6562</CardText>
            <br />
            <CardText>
              Av. Historiador Rubens de Mendonça, 2368 – Ed top Tower, Sala 606,
              Bairro Jd Aclimação, Cuiabá, MT. CEP 78050-280.
            </CardText>
          </ContactCard>
          <ContactCard>
            <CardTitle>Horário de atendimento</CardTitle>
            <br />
            <CardText>Segunda a Sexta das 8:00h às 17:00h</CardText>
            <br />
            <CardText>
              Deixe uma mensagem e em breve entraremos em contato com você.
            </CardText>
          </ContactCard>
        </ContactColumn>
        <ContactCard>
          <CardTitle>Nos mande uma mensagem!</CardTitle>
          <ContactForm onSubmit={handleSubmit(onSubmit)}>
            <InputsContainer>
              <Input
                label="NOME"
                id="name"
                containerClassName="contact-field"
                placeholder="Ex. Digite seu nome"
                error={errors?.name?.message}
                {...register('name')}
              />
              <MaskedInput
                label="TELEFONE"
                id="phone"
                maxLength={15}
                maskFunction={maskPhone}
                containerClassName="contact-field"
                placeholder="(00) 9 1234-5678"
                error={errors?.phone?.message}
                {...register('phone')}
              />
              <Input
                label="EMAIL"
                id="email"
                containerClassName="contact-field"
                placeholder="seunome@gmail.com"
                error={errors?.email?.message}
                {...register('email')}
              />
              <Input
                label="ASSUNTO"
                id="topic"
                containerClassName="contact-field"
                placeholder="Ex. Não recebi minha compra"
                error={errors?.topic?.message}
                {...register('topic')}
              />
            </InputsContainer>
            <TextArea
              label="MENSAGEM"
              id="message"
              containerClassName="contact-field"
              placeholder="Digite sua mensagem...."
              error={errors?.message?.message}
              {...register('message')}
            />
            <SubmitButton disabled={isSubmitting}>
              {isSubmitting ? (
                <Loading iconColor="white" iconFontSize="1.5rem" />
              ) : (
                'Enviar mensagem'
              )}
            </SubmitButton>
          </ContactForm>
        </ContactCard>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
