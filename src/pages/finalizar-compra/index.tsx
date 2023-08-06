import CartItemsList from '@/components/CartItemsList/CartItemsList';
import HelpFooter from '@/components/HelpFooter/HelpFooter';
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GetExtractResponse } from '@/interfaces/Extract';
import handleError from '@/utils/handleToast';
import api from '@/services/api';
import { formatCurrency } from '@/utils/formatCurrency';
import {
  Checkbox,
  ContinueButton,
  PageContent,
  PaymentMethodContainer,
  PaymentMethodList,
  PaymentMethodOption,
  PaymentMethodTitle,
  TopSection,
} from './styles';

const FinishPurchase = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [extractAccount, setExtractAccount] = useState<GetExtractResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getExtractAccount();
  }, []);

  const getExtractAccount = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get<GetExtractResponse>('/getExtractAccount');

      setExtractAccount(data);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

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
          <CartItemsList />
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
                Saldo da conta ({formatCurrency(extractAccount?.balance || 0)})
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
