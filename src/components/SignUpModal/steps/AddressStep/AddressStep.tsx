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
import { SignUpStepProps } from '../../interfaces';
import { Form, SubmitButton } from '../../styles';

const AddressStep = ({ signUpFormData, onNext }: SignUpStepProps) => {
  const [isCepValid, setIsCepValid] = useState(!!signUpFormData.cep);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    trigger,
    setValue,
    setError,
  } = useForm<IAddressStepForm>({
    resolver: yupResolver(AddressStepSchema),
    defaultValues: {
      cep: signUpFormData?.cep,
      city: signUpFormData?.city,
      state: signUpFormData?.state,
      number: signUpFormData?.number,
      street: signUpFormData?.street,
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
        });
        setIsCepValid(true);
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MaskedInput
        maxLength={9}
        maskFunction={maskCEP}
        label="CEP"
        readOnly={isCepValid}
        error={errors?.cep?.message}
        {...register('cep')}
      />
      {isCepValid && (
        <>
          <Input
            label="ESTADO"
            error={errors?.state?.message}
            {...register('state')}
          />
          <Input
            label="CIDADE"
            error={errors?.city?.message}
            {...register('city')}
          />
          <Input
            label="RUA"
            error={errors?.street?.message}
            {...register('street')}
          />
          <Input
            label="NÚMERO"
            placeholder="0000"
            error={errors?.number?.message}
            {...register('number')}
          />
        </>
      )}
      <SubmitButton
        type={isCepValid ? 'submit' : 'button'}
        onClick={isCepValid ? undefined : handleCep}
      >
        Continuar
      </SubmitButton>
    </Form>
  );
};

export default AddressStep;
