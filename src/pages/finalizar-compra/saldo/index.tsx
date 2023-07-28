import CartItemsList from '@/components/CartItemsList/CartItemsList';
import HelpFooter from '@/components/HelpFooter/HelpFooter';
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
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
                  <CardTitle>DISPONÍVEL</CardTitle>
                  <CardValue>R$ 0,00</CardValue>
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
              <ButtonsContainer>
                <FilledButton>Realizar pagamento</FilledButton>
                <OutlinedButton>Adicionar saldo</OutlinedButton>
              </ButtonsContainer>
            </ColumnContent>
          </BalanceColumn>
        </TopSection>
        <HelpFooter />
      </PageContent>
    </Layout>
  );
};

export default BalancePayment;
