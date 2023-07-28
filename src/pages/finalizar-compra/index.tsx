import Layout from '@/components/Layout/Layout';
import React, { useState } from 'react';
import PageTitle from '@/components/PageTitle/PageTitle';
import HelpFooter from '@/components/HelpFooter/HelpFooter';
import { useRouter } from 'next/router';
import {
  Checkbox,
  ContinueButton,
  Item,
  ItemListHeader,
  ItemsList,
  PageContent,
  PaymentMethodContainer,
  PaymentMethodList,
  PaymentMethodOption,
  PaymentMethodTitle,
  TopSection,
  TotalValueContainer,
} from './styles';

const FinishPurchase = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleContinue = () => {
    if (!paymentMethod) {
      return;
    }

    const paymentUrls: Record<string, string> = {
      pix: '/finalizar-compra/pix',
      credit_card: '/finalizar-compra/cartao',
      balance: '/finalizar-compra/saldo',
    };

    if (paymentUrls[paymentMethod]) {
      router.push(paymentUrls[paymentMethod]);
    }
  };

  return (
    <Layout>
      <PageContent>
        <PageTitle>Finalizar Compra</PageTitle>
        <TopSection>
          <ItemsList>
            <ItemListHeader>
              <p>Título(4)</p>
              <p>Valor</p>
            </ItemListHeader>
            <Item>
              <p>
                <span>1</span>
                5416234
              </p>
              <p>R$5,00</p>
            </Item>
            <Item>
              <p>
                <span>2</span>5416546
              </p>
              <p>R$5,00</p>
            </Item>
            <Item>
              <p>
                <span>3</span>5741359
              </p>
              <p>R$5,00</p>
            </Item>
            <Item>
              <p>
                <span>4</span>5874139
              </p>
              <p>R$5,00</p>
            </Item>
            <TotalValueContainer>
              <p>Valor total</p>
              <p>R$ 20,00</p>
            </TotalValueContainer>
          </ItemsList>
          <PaymentMethodContainer>
            <PaymentMethodList>
              <PaymentMethodTitle>Método de Pagamento</PaymentMethodTitle>
              <PaymentMethodOption>
                <Checkbox
                  type="radio"
                  name="paymentMethod"
                  value="credit_card"
                  checked={paymentMethod === 'credit_card'}
                  onChange={() => setPaymentMethod('credit_card')}
                />
                Cartão de Crédito
              </PaymentMethodOption>
              <PaymentMethodOption>
                <Checkbox
                  type="radio"
                  name="paymentMethod"
                  value="balance"
                  checked={paymentMethod === 'balance'}
                  onChange={() => setPaymentMethod('balance')}
                />
                Saldo da conta (R$ 0,00)
              </PaymentMethodOption>
              <PaymentMethodOption>
                <Checkbox
                  type="radio"
                  name="paymentMethod"
                  value="pix"
                  checked={paymentMethod === 'pix'}
                  onChange={() => setPaymentMethod('pix')}
                />
                PIX
              </PaymentMethodOption>

              <ContinueButton onClick={handleContinue}>
                Continuar
              </ContinueButton>
            </PaymentMethodList>
          </PaymentMethodContainer>
        </TopSection>
        <HelpFooter showBilletSection />
      </PageContent>
    </Layout>
  );
};

export default FinishPurchase;
