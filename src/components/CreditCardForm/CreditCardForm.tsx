import { cardDateMask, cardNumberMask } from '@/utils/masks';
import {
  CreditCardSchema,
  ICreditCardForm,
} from '@/validations/CreditCardSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input/Input';
import MaskedInput from '../Input/MaskedInput';
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  ContinueButton,
  Form,
} from './styles';

interface Props {
  onSuccess: () => void;
  onError: () => void;
}

const CreditCardForm = ({ onSuccess, onError }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICreditCardForm>({
    resolver: yupResolver(CreditCardSchema),
  });

  const onSubmit: SubmitHandler<ICreditCardForm> = form => {
    console.log(form);
    onSuccess();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MaskedInput
        label="NÚMERO DO CARTÃO"
        maskFunction={cardNumberMask}
        placeholder="0000 0000 0000 0000"
        maxLength={19}
        error={errors?.card_number?.message}
        {...register('card_number')}
      />
      <Input
        label="NOME IMPRESSO NO CARTÃO"
        error={errors?.name?.message}
        {...register('name')}
      />
      <MaskedInput
        maskFunction={cardDateMask}
        label="VALIDADE"
        placeholder="00/00"
        maxLength={5}
        error={errors?.date?.message}
        {...register('date')}
      />
      <Input
        label="CVV"
        placeholder="000"
        maxLength={3}
        error={errors?.cvv?.message}
        {...register('cvv')}
      />
      <CheckboxContainer>
        <Checkbox type="checkbox" />
        <CheckboxLabel>Salvar para compras futuras</CheckboxLabel>
      </CheckboxContainer>
      <ContinueButton type="submit">Realizar pagamento</ContinueButton>
    </Form>
  );
};

export default CreditCardForm;
