import CartItemsList from '@/components/CartItemsList/CartItemsList';
import HelpFooter from '@/components/HelpFooter/HelpFooter';
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import handleError, { handleSuccess } from '@/utils/handleToast';
import api from '@/services/api';
import { GetExtractResponse } from '@/interfaces/Extract';
import { useCart } from '@/hooks/useCart';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatPaymentTitles } from '@/utils/formatPaymentTitles';
import {
  BalanceCard,
  BalanceCardsContainer,
  BalanceColumn,
  BalanceDescription,
  ButtonsContainer,
  CardTitle,
  CardValue,
  ColumnContent,
  ColumnTitle,
  FilledButton,
  OutlinedButton,
  PageContent,
  TopSection,
} from './styles';

const BalancePayment = () => {
  const router = useRouter();
  const [extractAccount, setExtractAccount] = useState<GetExtractResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems } = useCart();
  const { selectedDrawPromo } = useCurrentDraw();

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

  const handleFinishPayment = async () => {
    if (!cartItems.length) {
      handleError('Seu carrinho está vazio!');
      return;
    }

    try {
      const { data } = await api.post('/paymentTitle', {
        data: {
          payment_type: {
            id: 4,
          },
          titles: formatPaymentTitles(cartItems),
        },
      });

      // TODO: Terminar
      handleSuccess('Pagamento realizado com sucesso!');
    } catch (error) {
      handleError(error);
    }
  };

  const unitTitlePrice =
    (selectedDrawPromo?.price || 0) / (selectedDrawPromo?.quantity || 1);

  const hasEnoughBalance =
    unitTitlePrice * cartItems.length <= (extractAccount?.balance || 0);

  return (
    <Layout>
      <PageContent>
        <PageTitle>Finalizar Compra</PageTitle>
        <TopSection>
          <CartItemsList />
          <BalanceColumn>
            <ColumnContent>
              <ColumnTitle>Pagamento com saldo</ColumnTitle>
              <BalanceCardsContainer>
                <BalanceCard>
                  <CardTitle hasEnoughBalance={hasEnoughBalance}>
                    DISPONÍVEL
                  </CardTitle>
                  <CardValue textColor={hasEnoughBalance ? 'green' : 'red'}>
                    {formatCurrency(extractAccount?.balance || 0)}
                  </CardValue>
                </BalanceCard>
                <BalanceCard>
                  <CardTitle>PENDENTE</CardTitle>
                  <CardValue>
                    {formatCurrency(extractAccount?.totalCreditPendding || 0)}
                  </CardValue>
                </BalanceCard>
              </BalanceCardsContainer>
              <BalanceDescription>
                Obs.: O saldo pode demorar até 72 horas após pagamento do boleto
                conforme compensação bancária
              </BalanceDescription>
              {hasEnoughBalance ? (
                <ButtonsContainer>
                  <FilledButton onClick={handleFinishPayment}>
                    Realizar pagamento
                  </FilledButton>
                  <OutlinedButton
                    onClick={() => router.push('/adicionar-saldo')}
                  >
                    Adicionar saldo
                  </OutlinedButton>
                </ButtonsContainer>
              ) : (
                <ButtonsContainer
                  style={{
                    marginTop: '5rem',
                  }}
                >
                  <FilledButton onClick={() => router.push('/adicionar-saldo')}>
                    Adicionar saldo
                  </FilledButton>
                </ButtonsContainer>
              )}
            </ColumnContent>
          </BalanceColumn>
        </TopSection>
        <HelpFooter />
      </PageContent>
    </Layout>
  );
};

export default BalancePayment;
