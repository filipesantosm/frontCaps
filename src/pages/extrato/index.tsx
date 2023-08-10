/* eslint-disable react/no-array-index-key */
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import { GetBalanceResponse } from '@/interfaces/Balance';
import api from '@/services/api';
import { theme } from '@/styles/theme';
import { formatCurrency } from '@/utils/formatCurrency';
import handleError from '@/utils/handleToast';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { GetMyExtractResponse } from '@/interfaces/MyExtract';
import { format, parseISO } from 'date-fns';
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
  const router = useRouter();

  const [tab, setTab] = useState<'pix' | 'credit_card'>('pix');
  const [balance, setBalance] = useState<GetBalanceResponse>();
  const [extract, setExtract] = useState<GetMyExtractResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingExtract, setIsLoadingExtract] = useState(false);

  useEffect(() => {
    getBalance();
    getMyExtract();
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

  const getMyExtract = async () => {
    setIsLoadingExtract(true);
    try {
      const { data } = await api.get<GetMyExtractResponse>('/getMyExtract');

      setExtract(data);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoadingExtract(false);
    }
  };

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
              {tab === 'pix' &&
                extract?.payment?.map((extractPayment, index) => (
                  <PurchaseItem key={`${index}-${extractPayment.date}`}>
                    <PurchaseText>
                      {format(
                        parseISO(extractPayment.date),
                        "dd/MM/yyyy '|' HH:mm'H'",
                      )}
                    </PurchaseText>
                    <PurchaseText>
                      {extractPayment.quantity
                        ? `${extractPayment.quantity} títulos`
                        : '-'}
                    </PurchaseText>
                    <PurchaseText>
                      {formatCurrency(extractPayment.value || 0)}
                    </PurchaseText>
                    <PurchaseText>{extractPayment.type}</PurchaseText>
                  </PurchaseItem>
                ))}
            </PurchaseList>
          </PurchaseTableWrapper>
        </Column>
        <Separator />
        <Column>
          {tab === 'pix' && (
            <>
              <ColumnTitle>Saldo da conta</ColumnTitle>
              <BalanceCardsContainer>
                <BalanceCard>
                  <BalanceCardTitle>DISPONÍVEL</BalanceCardTitle>
                  <BalanceCardValue
                    style={{
                      color: theme.colors.green,
                    }}
                  >
                    {formatCurrency(balance?.credit || 0)}
                  </BalanceCardValue>
                </BalanceCard>
                <BalanceCard>
                  <BalanceCardTitle>PENDENTE</BalanceCardTitle>
                  <BalanceCardValue>
                    {formatCurrency(balance?.pending || 0)}
                  </BalanceCardValue>
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
            </>
          )}
        </Column>
      </PageContent>
    </Layout>
  );
};

export default PurchaseHistory;
