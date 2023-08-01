/* eslint-disable react/no-array-index-key */
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import {
  AddBalanceButton,
  BalanceCard,
  BalanceCardTitle,
  BalanceCardValue,
  BalanceCardsContainer,
  BalanceDescription,
  Column,
  ColumnTitle,
  PageContent,
  PurchaseHeader,
  PurchaseHeaderText,
  PurchaseItem,
  PurchaseList,
  PurchaseTableWrapper,
  PurchaseText,
  Separator,
  TabButton,
  TabSelector,
} from './styles';

const PurchaseHistory = () => {
  const [tab, setTab] = useState<'pix' | 'credit_card'>('pix');
  const router = useRouter();

  return (
    <Layout>
      <PageContent>
        <Column>
          <PageTitle>Extrato de compra</PageTitle>
          <TabSelector>
            <TabButton isActive={tab === 'pix'} onClick={() => setTab('pix')}>
              BOLETO/PIX
            </TabButton>
            <TabButton
              isActive={tab === 'credit_card'}
              onClick={() => setTab('credit_card')}
            >
              CRÉDITO
            </TabButton>
          </TabSelector>

          <ColumnTitle
            style={{
              marginTop: '2.5rem',
            }}
          >
            Histórico
          </ColumnTitle>

          <PurchaseTableWrapper>
            <PurchaseHeader>
              <PurchaseHeaderText>DATA/HORA</PurchaseHeaderText>
              <PurchaseHeaderText>QUANTIDADE</PurchaseHeaderText>
              <PurchaseHeaderText>VALOR</PurchaseHeaderText>
              <PurchaseHeaderText>MÉTODO</PurchaseHeaderText>
            </PurchaseHeader>
            <PurchaseList>
              {Array.from({ length: 20 }).map((_, index) => (
                <PurchaseItem key={index}>
                  <PurchaseText>27/04/2023 | 14:25H</PurchaseText>
                  <PurchaseText>1 Título</PurchaseText>
                  <PurchaseText>R$ 90,00</PurchaseText>
                  <PurchaseText>
                    {tab === 'pix' ? 'Pix' : 'Cartão'}
                  </PurchaseText>
                </PurchaseItem>
              ))}
            </PurchaseList>
          </PurchaseTableWrapper>
        </Column>
        <Separator />
        <Column>
          <ColumnTitle>Saldo da conta</ColumnTitle>
          <BalanceCardsContainer>
            <BalanceCard>
              <BalanceCardTitle>DISPONÍVEL</BalanceCardTitle>
              <BalanceCardValue>R$ 0,00</BalanceCardValue>
            </BalanceCard>
            <BalanceCard>
              <BalanceCardTitle>PENDENTE</BalanceCardTitle>
              <BalanceCardValue>R$ 30,00</BalanceCardValue>
            </BalanceCard>
          </BalanceCardsContainer>
          <AddBalanceButton onClick={() => router.push('/adicionar-saldo')}>
            <FaPlusCircle />
            Adicionar saldo
          </AddBalanceButton>
          <BalanceDescription>
            Obs.: O saldo pode demorar até 72 horas após pagamento do boleto
            conforme compensação bancária
          </BalanceDescription>
        </Column>
      </PageContent>
    </Layout>
  );
};

export default PurchaseHistory;
