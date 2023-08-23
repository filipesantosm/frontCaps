import Input from '@/components/Input/Input';
import MaskedInput from '@/components/Input/MaskedInput';
import handleError from '@/utils/handleToast';
import { maskCEP } from '@/utils/masks';
import {
  AddressStepSchema,
  IAddressStepForm,
} from '@/validations/SignUpSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Loading from '@/components/Loading/Loading';
import { SignUpStepProps } from '../../interfaces';
import { Form, SubmitButton } from '../../styles';

const AddressStep = ({ signUpFormData, onNext }: SignUpStepProps) => {
  const [isCepValid, setIsCepValid] = useState(!!signUpFormData.cep);
  const [isValidatingCep, setIsValidatingCep] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    trigger,
    setError,
  } = useForm<IAddressStepForm>({
    resolver: yupResolver(AddressStepSchema),
    defaultValues: {
      cep: signUpFormData?.cep,
      city: signUpFormData?.city,
      state: signUpFormData?.state,
      number: signUpFormData?.number,
      street: signUpFormData?.street,
      neighborhood: signUpFormData?.neighborhood,
      cityCodIBGE: signUpFormData?.cityCodIBGE,
      stateCodIBGE: signUpFormData?.stateCodIBGE,
    },
  });

  const onSubmit: SubmitHandler<IAddressStepForm> = form => {
    onNext({ ...form });
  };

  const handleCep = async () => {
    const cepFieldValid = await trigger('cep');

    if (!cepFieldValid) {
      return;
    }

    const cep = getValues('cep');

    setIsValidatingCep(true);
    try {
      const cepFormatted = cep.replace('-', '');
      if (cepFormatted.length >= 8) {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${cepFormatted}/json/`,
        );

        if (data.erro) {
          setIsValidatingCep(false);
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
          cityCodIBGE: data.ibge?.toString(),
          stateCodIBGE: data.ibge?.toString()?.substring(0, 2),
        });
        setIsCepValid(true);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsValidatingCep(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MaskedInput
        maxLength={9}
        maskFunction={maskCEP}
        label="CEP"
        id="cep"
        readOnly={isCepValid}
        error={errors?.cep?.message}
        {...register('cep')}
      />
      {isCepValid && (
        <>
          <Input
            label="ESTADO"
            id="state"
            error={errors?.state?.message}
            {...register('state')}
          />
          <Input
            label="CIDADE"
            id="city"
            error={errors?.city?.message}
            {...register('city')}
          />
          <Input
            label="BAIRRO"
            id="neighborhood"
            error={errors?.neighborhood?.message}
            {...register('neighborhood')}
          />
          <Input
            label="RUA"
            id="street"
            error={errors?.street?.message}
            {...register('street')}
          />
          <Input
            label="NÚMERO"
            id="number"
            placeholder="0000"
            error={errors?.number?.message}
            {...register('number')}
          />
        </>
      )}
      <SubmitButton
        type={isCepValid ? 'submit' : 'button'}
        onClick={isCepValid ? undefined : handleCep}
        disabled={isValidatingCep}
      >
        {isValidatingCep ? (
          <Loading iconColor="white" iconFontSize="1.625rem" />
        ) : (
          'Continuar'
        )}
      </SubmitButton>
    </Form>
  );
};

export default AddressStep;
