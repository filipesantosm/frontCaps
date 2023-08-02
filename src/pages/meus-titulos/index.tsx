/* eslint-disable react/no-array-index-key */
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaTable } from 'react-icons/fa';
import ScratchCardsList from '@/components/ScratchCardsList/ScratchCardsList';
import {
  BuyButton,
  EmptyContent,
  EmptyText,
  EmptyTitle,
  InformationItem,
  NumberText,
  NumbersContainer,
  NumbersGrid,
  ObservationSection,
  ObservationText,
  ObservationTitle,
  PageContent,
  PageSection,
  Purchase,
  PurchaseInformation,
  PurchasedTitleContainer,
  PurchasesList,
  RaffleColumn,
  RaffleRow,
  RaffleText,
  RaffleTitle,
  Subtitle,
  TabButton,
  TabSelector,
} from './styles';

type Tabs = 'scratchcard' | 'purchases';

const Purchases = () => {
  const [amount, setAmount] = useState(4);
  const [tab, setTab] = useState<Tabs>('purchases');
  const router = useRouter();

  const enableScratchCards = !!router.query.riscadinha;

  if (amount === 0) {
    return (
      <Layout>
        <PageContent>
          <PageSection>
            <PageTitle onClick={() => setAmount(4)}>
              Títulos adquiridos (0)
            </PageTitle>
            <EmptyContent>
              <FaTable />
              <EmptyTitle>Títulos indisponíveis</EmptyTitle>
              <EmptyText>
                Você não possuí compras de títulos referentes à essa premiação.
              </EmptyText>
              <EmptyText>
                Clique no botão à baixo para comprar novos títulos!
              </EmptyText>

              <BuyButton onClick={() => router.push('/comprar')}>
                Comprar
              </BuyButton>
            </EmptyContent>
          </PageSection>
        </PageContent>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageContent>
        <PageSection>
          <PageTitle onClick={() => setAmount(0)}>
            Títulos adquiridos ({amount})
          </PageTitle>
          {!enableScratchCards && <Subtitle>Meus títulos</Subtitle>}

          {enableScratchCards && (
            <TabSelector>
              <TabButton
                isActive={tab === 'purchases'}
                onClick={() => setTab('purchases')}
              >
                TÍTULOS
              </TabButton>
              <TabButton
                isActive={tab === 'scratchcard'}
                onClick={() => setTab('scratchcard')}
              >
                RISCADINHA
              </TabButton>
            </TabSelector>
          )}

          {tab === 'purchases' ? (
            <PurchasesList>
              {Array.from({ length: 4 }).map((_, index) => (
                <Purchase key={index}>
                  <RaffleRow>
                    <RaffleColumn>
                      <RaffleTitle>PROCESSO SUSEP</RaffleTitle>
                      <RaffleText>15414.633570/2022-18</RaffleText>
                    </RaffleColumn>
                    <RaffleColumn>
                      <RaffleTitle>SORTEIO</RaffleTitle>
                      <RaffleText>30-04-2023</RaffleText>
                    </RaffleColumn>
                    <RaffleColumn>
                      <RaffleTitle>QTD</RaffleTitle>
                      <RaffleText
                        style={{
                          textAlign: 'right',
                        }}
                      >
                        01
                      </RaffleText>
                    </RaffleColumn>
                  </RaffleRow>
                  <PurchasedTitleContainer>
                    <PurchaseInformation>
                      <div>
                        <InformationItem>
                          <p>Nº do título</p>
                          <p>0.931.784</p>
                        </InformationItem>
                        <InformationItem>
                          <p>Nº da sorte</p>
                          <p>229.570</p>
                        </InformationItem>
                      </div>
                      <div>
                        <InformationItem>
                          <p>Valor</p>
                          <p>R$ 5,00</p>
                        </InformationItem>
                        <InformationItem>
                          <p>Compra</p>
                          <p>04/12/23</p>
                        </InformationItem>
                      </div>
                    </PurchaseInformation>
                    <NumbersContainer>
                      <NumbersGrid>
                        {Array.from({ length: 28 }).map((__, numberIndex) => (
                          <NumberText
                            key={numberIndex}
                            isActive={Math.random() > 0.75}
                          >
                            {(numberIndex + 1).toString().padStart(2, '0')}
                          </NumberText>
                        ))}
                      </NumbersGrid>
                    </NumbersContainer>
                  </PurchasedTitleContainer>
                </Purchase>
              ))}
            </PurchasesList>
          ) : (
            <ScratchCardsList />
          )}
        </PageSection>
        <ObservationSection>
          <ObservationTitle>Observações</ObservationTitle>
          <ObservationText>
            Estão disponíveis para consulta, o histórico de compras dos últimos
            6 meses. Em caso de dúvidas ou sugestões, entre em contato com nossa
            central de atendimento
          </ObservationText>
        </ObservationSection>
      </PageContent>
    </Layout>
  );
};

export default Purchases;
