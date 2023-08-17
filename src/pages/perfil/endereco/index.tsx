import Input from '@/components/Input/Input';
import MaskedInput from '@/components/Input/MaskedInput';
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import { useAuth } from '@/hooks/useAuth';
import api from '@/services/api';
import handleError, { handleSuccess } from '@/utils/handleToast';
import { maskCEP } from '@/utils/masks';
import {
  AddressStepSchema,
  IAddressStepForm,
} from '@/validations/SignUpSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoChevronBack } from 'react-icons/io5';
import { Column, Form, SubmitButton } from '../styles';
import { BackButton, Header, PageContent } from './styles';

const ChangeAddress = () => {
  const { user, getUser } = useAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    getValues,
    setError,
    formState: { errors },
  } = useForm<IAddressStepForm>({
    resolver: yupResolver(AddressStepSchema),
    defaultValues: {
      cep: user.cep ?? '',
      city: user.city ?? '',
      neighborhood: user.neighborhood ?? '',
      number: user.number ?? '',
      state: user.state ?? '',
      street: user.street ?? '',
    },
  });

  const handleCep = async () => {
    const cepFieldValid = await trigger('cep');

    if (!cepFieldValid) {
      return;
    }

    const cep = getValues('cep');

    try {
      const cepFormatted = cep.replace('-', '');
      if (cepFormatted.length >= 8) {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${cepFormatted}/json/`,
        );

        if (data.erro) {
          setError('cep', {
            message: 'CEP não encontrado',
            type: 'inexistent-cep',
          });
          return;
        }

        reset({
          state: data.uf,
          city: data.localidade,
          street: data.logradouro,
          neighborhood: data.bairro,
        });
      }
    } catch (error) {
      handleError(error);
    }
  };

  const onSubmit: SubmitHandler<IAddressStepForm> = async form => {
    setIsSubmitting(true);

    try {
      await api.put('/UserUpdate', {
        data: {
          ...user,
          ...form,
        },
      });

      getUser();
      handleSuccess('Endereço atualizado com sucesso!');
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
          <PageTitle>Alterar endereço</PageTitle>
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Column
            style={{
              marginTop: '2rem',
            }}
          >
            <MaskedInput
              label="CEP"
              maskFunction={maskCEP}
              maxLength={9}
              {...register('cep', {
                onBlur: handleCep,
              })}
              containerClassName="profile-field"
              error={errors?.cep?.message}
            />
            <Input
              label="ESTADO"
              {...register('state')}
              containerClassName="profile-field"
              error={errors?.state?.message}
            />
            <Input
              label="BAIRRO"
              {...register('neighborhood')}
              containerClassName="profile-field"
              error={errors?.neighborhood?.message}
            />
            <Input
              label="RUA"
              {...register('street')}
              containerClassName="profile-field"
              error={errors?.street?.message}
            />
            <Input
              label="NÚMERO"
              {...register('number')}
              containerClassName="profile-field"
              error={errors?.number?.message}
            />
            <Input
              label="CIDADE"
              {...register('city')}
              containerClassName="profile-field"
              error={errors?.city?.message}
            />
            <SubmitButton
              style={{
                maxWidth: 'unset',
                marginTop: '1rem',
              }}
              disabled={isSubmitting}
            >
              Salvar endereço
            </SubmitButton>
          </Column>
        </Form>
      </PageContent>
    </Layout>
  );
};

export default ChangeAddress;
