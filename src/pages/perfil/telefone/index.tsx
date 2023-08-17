import MaskedInput from '@/components/Input/MaskedInput';
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import { useAuth } from '@/hooks/useAuth';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import { maskPhone } from '@/utils/masks';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoChevronBack } from 'react-icons/io5';
import * as yup from 'yup';
import { Column, Form, SubmitButton } from '../styles';
import { BackButton, Header, PageContent } from './styles';

interface IChangePhoneForm {
  phone: string;
}

const ChangePhoneSchema = yup.object({
  phone: yup
    .string()
    .required('Telefone é obrigatório')
    .test({
      message: 'Telefone inválido',
      test: value => {
        if (!value) {
          return false;
        }

        if (value.length < 14) {
          return false;
        }

        return true;
      },
    }),
});

const ChangePhoneNumber = () => {
  const { user, getUser } = useAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePhoneForm>({
    resolver: yupResolver(ChangePhoneSchema),
    defaultValues: {
      phone: user.phone ?? '',
    },
  });

  const onSubmit: SubmitHandler<IChangePhoneForm> = async form => {
    setIsSubmitting(true);

    try {
      await api.put('/UserUpdate', {
        data: {
          ...user,
          phone: form.phone,
        },
      });

      getUser();
      router.push('/perfil');
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageContent>
        <Header>
          <BackButton type="button" onClick={router.back}>
            <IoChevronBack />
          </BackButton>
          <PageTitle>Alterar telefone</PageTitle>
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Column
            style={{
              marginTop: '2rem',
            }}
          >
            <MaskedInput
              label="TELEFONE"
              maskFunction={maskPhone}
              maxLength={15}
              {...register('phone')}
              containerClassName="profile-field"
              error={errors?.phone?.message}
            />
            <SubmitButton
              style={{
                maxWidth: 'unset',
                marginTop: '1rem',
              }}
              disabled={isSubmitting}
            >
              Salvar telefone
            </SubmitButton>
          </Column>
        </Form>
      </PageContent>
    </Layout>
  );
};

export default ChangePhoneNumber;
