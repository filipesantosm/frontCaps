import { useCart } from '@/hooks/useCart';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { TokenizeError, TokenizeResponse } from '@/interfaces/CreditCard';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import { cardDateMask, cardNumberMask } from '@/utils/masks';
import { handleTokenizeError } from '@/utils/tokenizeErrors';
import {
  CreditCardSchema,
  ICreditCardForm,
} from '@/validations/CreditCardSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Icon } from '@iconify/react';
import creditCardType from 'credit-card-type';
import Script from 'next/script';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input/Input';
import MaskedInput from '../Input/MaskedInput';
import Loading from '../Loading/Loading';
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

const brandName: Record<string, string> = {
  visa: 'visa',
  mastercard: 'mastercard',
  'american-express': 'amex',
  elo: 'elo',
  hipercard: 'hipercard',
};

const CreditCardForm = ({ onSuccess, onError }: Props) => {
  const { cartItems } = useCart();
  const { selectedDrawPromo } = useCurrentDraw();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<ICreditCardForm>({
    resolver: yupResolver(CreditCardSchema),
  });

  const onSubmit: SubmitHandler<ICreditCardForm> = form => {
    if (!cartItems.length) {
      handleError('Você não possui itens no carrinho');
      return;
    }

    setIsSubmitting(true);

    const cardBrands = creditCardType(form.card_number);
    const firstCardBrand = cardBrands[0];
    const brand = firstCardBrand.type;

    const [expiration_month, expiration_year] = form.date.split('/');

    const gn = (window as any).$gn as any;

    const shouldSaveCard = form.save_card === true;

    const tokenizePayload = {
      brand: brandName[brand] || brand,
      number: form.card_number.replace(' ', ''),
      cvv: form.cvv,
      expiration_month,
      expiration_year: `20${expiration_year}`,
      reuse: shouldSaveCard,
    };

    gn.checkout.getPaymentToken(
      tokenizePayload,
      async (
        tokenizeError: TokenizeError,
        tokenizeResponse: TokenizeResponse,
      ) => {
        if (tokenizeError) {
          onError();
          handleTokenizeError(tokenizeError);
          setIsSubmitting(false);
          return;
        }
        try {
          await api.post('/paymentTitle', {
            data: {
              payment_type: {
                id: 2,
              },
              tokencard: tokenizeResponse.data.payment_token,
              titles: cartItems.map(cartItem => ({
                id: cartItem.id,
              })),
              promo: selectedDrawPromo?.value,
              origin: 'Web',
            },
          });

          if (shouldSaveCard) {
            await api.post('/createCard', {
              data: {
                tokencard: tokenizeResponse.data.payment_token,
                lastDig: tokenizePayload.number.substring(
                  tokenizePayload.number.length - 4,
                ),
                branch: tokenizePayload.brand,
              },
            });
          }

          onSuccess();
        } catch (apiError) {
          handleError(apiError);
          onError();
        } finally {
          setIsSubmitting(false);
        }
      },
    );
  };

  const cardNumber = watch('card_number');

  const possibleCardBrands = creditCardType(cardNumber);
  const cardBrand =
    possibleCardBrands.length && possibleCardBrands.length === 1
      ? brandName[possibleCardBrands[0]?.type] || ''
      : '';

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Script id="gerencianet-card">
        {`var s=document.createElement('script');s.type='text/javascript';var v=parseInt(Math.random()*1000000);s.src='https://sandbox.gerencianet.com.br/v1/cdn/fc85f27aa219ff25f4fcbbafb97ac6ff/'+v;s.async=false;s.id='fc85f27aa219ff25f4fcbbafb97ac6ff';if(!document.getElementById('fc85f27aa219ff25f4fcbbafb97ac6ff')){document.getElementsByTagName('head')[0].appendChild(s);};$gn={validForm:true,processed:false,done:{},ready:function(fn){$gn.done=fn;}};`}
      </Script>
      <MaskedInput
        label="NÚMERO DO CARTÃO"
        maskFunction={cardNumberMask}
        placeholder="0000 0000 0000 0000"
        maxLength={19}
        error={errors?.card_number?.message}
        icon={
          cardBrand ? (
            <Icon
              icon={`brandico:${cardBrand}`}
              style={{
                position: 'absolute',
                right: '1rem',
                bottom: '0.375rem',
                fontSize: '2.5rem',
                color: '#00214b',
              }}
            />
          ) : null
        }
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
        <Checkbox type="checkbox" id="save_card" {...register('save_card')} />
        <CheckboxLabel htmlFor="save_card ">
          Salvar para compras futuras
        </CheckboxLabel>
      </CheckboxContainer>
      <ContinueButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Loading iconColor="white" /> : 'Realizar pagamento'}
      </ContinueButton>
    </Form>
  );
};

export default CreditCardForm;
