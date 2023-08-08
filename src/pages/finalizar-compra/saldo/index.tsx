import CartItemsList from '@/components/CartItemsList/CartItemsList';
import HelpFooter from '@/components/HelpFooter/HelpFooter';
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import { useCart } from '@/hooks/useCart';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { GetBalanceResponse } from '@/interfaces/Balance';
import api from '@/services/api';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatPaymentTitles } from '@/utils/formatPaymentTitles';
import handleError, { handleSuccess } from '@/utils/handleToast';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
  const { cartItems } = useCart();
  const { selectedDrawPromo } = useCurrentDraw();

  const [balance, setBalance] = useState<GetBalanceResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBalance();
  }, []);

  const getBalance = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get<GetBalanceResponse>('/getBalance');

      setBalance(data);
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
    unitTitlePrice * cartItems.length <= (balance?.credit || 0);

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
                    {formatCurrency(balance?.credit || 0)}
                  </CardValue>
                </BalanceCard>
                <BalanceCard>
                  <CardTitle>PENDENTE</CardTitle>
                  <CardValue>{formatCurrency(balance?.pending || 0)}</CardValue>
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
