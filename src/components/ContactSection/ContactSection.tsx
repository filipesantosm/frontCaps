import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { maskPhone } from '@/utils/masks';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactSchema, IContactForm } from '@/validations/ContactSchema';
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
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import MaskedInput from '../Input/MaskedInput';

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactForm>({
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit: SubmitHandler<IContactForm> = form => {
    console.log(form);

    reset();
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
            <SubmitButton>Enviar mensagem</SubmitButton>
          </ContactForm>
        </ContactCard>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
