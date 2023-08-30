import MaskedInput from '@/components/Input/MaskedInput';
import Loading from '@/components/Loading/Loading';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import { maskCPF } from '@/utils/masks';
import { CpfStepSchema, ICpfStepForm } from '@/validations/SignUpSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { format, parse } from 'date-fns';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CpfValidatorResponse, SignUpStepProps } from '../../interfaces';
import { Form, FormDescription, SubmitButton, TextButton } from '../../styles';

const CpfStep = ({ onNext, onClickLogin, signUpFormData }: SignUpStepProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICpfStepForm>({
    resolver: yupResolver(CpfStepSchema),
    defaultValues: {
      cpf: signUpFormData.cpf,
    },
  });

  const onSubmit: SubmitHandler<ICpfStepForm> = async form => {
    setIsSubmitting(true);
    try {
      const { data } = await api.post<CpfValidatorResponse>('/dataValidator', {
        data: {
          cpf: form.cpf,
        },
      });

      const formattedDateBirth = data.dateBirth
        ? format(parse(data.dateBirth, 'dd/MM/yyyy', new Date()), 'yyyy-MM-dd')
        : undefined;

      onNext({
        cpf: form.cpf,
        name: data.name,
        dateBirth: formattedDateBirth,
      });
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormDescription>
        Bem vindo(a) ao MTCAP! <br />
        Para se cadastrar, informe seu CPF abaixo:
      </FormDescription>
      <MaskedInput
        label="CPF"
        id="cpf"
        maskFunction={maskCPF}
        maxLength={14}
        placeholder="000.000.000-00"
        error={errors?.cpf?.message}
        {...register('cpf')}
      />
      <SubmitButton disabled={isSubmitting}>
        {isSubmitting ? (
          <Loading iconColor="white" iconFontSize="1.625rem" />
        ) : (
          'Continuar'
        )}
      </SubmitButton>
      <TextButton
        type="button"
        onClick={onClickLogin}
        style={{
          textAlign: 'center',
        }}
      >
        Já tem conta? Entre na sua conta por aqui!
      </TextButton>
    </Form>
  );
};

export default CpfStep;
