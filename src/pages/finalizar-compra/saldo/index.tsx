import CartItemsList from '@/components/CartItemsList/CartItemsList';
import HelpFooter from '@/components/HelpFooter/HelpFooter';
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
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
  const [hasEnoughBalance, setHasEnoughBalance] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasEnoughBalance(true);
    }, 10000);
  }, []);

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
                    R$ 0,00
                  </CardValue>
                </BalanceCard>
                <BalanceCard>
                  <CardTitle>PENDENTE</CardTitle>
                  <CardValue>R$ 0,00</CardValue>
                </BalanceCard>
              </BalanceCardsContainer>
              <BalanceDescription>
                Obs.: O saldo pode demorar até 72 horas após pagamento do boleto
                conforme compensação bancária
              </BalanceDescription>
              {hasEnoughBalance ? (
                <ButtonsContainer>
                  <FilledButton>Realizar pagamento</FilledButton>
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
