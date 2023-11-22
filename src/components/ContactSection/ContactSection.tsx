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
            <CardText> (15) 3035-2699</CardText>
            <br />
            <CardText> 0800 646 8378</CardText>
            <br />
            <CardText> 0800 606 2320</CardText>
            <br />
            <CardText>
              Escritório Central: Rua Horácio Cenci, nº 75 – Ed. West Point, 10º
              Andar PQ. Campolim Sorocaba – SP
            </CardText>
          </ContactCard>
          <ContactCard>
            <CardTitle>Horário de atendimento</CardTitle>
            <br />
            <CardText>Segunda a Sexta das 9h às 18:00</CardText>
            <br />
            <CardText>Sábado 21 às 00h</CardText>
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
