/* eslint-disable react/no-array-index-key */
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import ScratchCardsList from '@/components/ScratchCardsList/ScratchCardsList';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { GetMyTitleResponse, ITitle } from '@/interfaces/MyTitle';
import api from '@/services/api';
import { formatCurrency } from '@/utils/formatCurrency';
import handleError from '@/utils/handleToast';
import { format, parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaTable } from 'react-icons/fa';
import { getTitleNumbers } from '@/utils/getTitleNumbers';
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

interface TitleToRender extends ITitle {
  titleNumbers: number[];
}

const Purchases = () => {
  const [titles, setTitles] = useState<TitleToRender[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentDraw } = useCurrentDraw();
  const [tab, setTab] = useState<Tabs>('purchases');
  const router = useRouter();

  useEffect(() => {
    getTitles();
  }, []);

  const getTitles = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get<GetMyTitleResponse>('/getMyTitle');

      const formattedTitles: TitleToRender[] = data?.Ttitulos?.map(title => ({
        ...title,
        titleNumbers: getTitleNumbers(title),
      }));

      setTitles(formattedTitles || []);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const enableScratchCards = !!router.query.riscadinha;

  if (titles.length === 0 && !isLoading) {
    return (
      <Layout>
        <PageContent>
          <PageSection>
            <PageTitle>Títulos adquiridos (0)</PageTitle>
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

  const susep = currentDraw?.attributes?.susep;
  const formattedDrawDate = currentDraw?.attributes?.dateDraw
    ? format(parseISO(currentDraw.attributes.dateDraw), 'dd-MM-yyyy')
    : '';

  return (
    <Layout>
      <PageContent>
        <PageSection>
          <PageTitle>Títulos adquiridos ({titles.length})</PageTitle>
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
              {titles.map(title => (
                <Purchase key={title.id}>
                  <RaffleRow>
                    <RaffleColumn>
                      <RaffleTitle>PROCESSO SUSEP</RaffleTitle>
                      <RaffleText>{susep}</RaffleText>
                    </RaffleColumn>
                    <RaffleColumn>
                      <RaffleTitle>SORTEIO</RaffleTitle>
                      <RaffleText>{formattedDrawDate}</RaffleText>
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
                          <p>{title.number}</p>
                        </InformationItem>
                        <InformationItem>
                          <p>Nº da sorte</p>
                          <p>{title.luckyNumber}</p>
                        </InformationItem>
                      </div>
                      <div>
                        <InformationItem>
                          <p>Valor</p>
                          <p>{formatCurrency(title.price || 0)}</p>
                        </InformationItem>
                        <InformationItem>
                          <p>Compra</p>
                          <p>
                            {title.dateSale
                              ? format(parseISO(title.dateSale), 'dd/MM/yyyy')
                              : '-'}
                          </p>
                        </InformationItem>
                      </div>
                    </PurchaseInformation>
                    <NumbersContainer>
                      <NumbersGrid>
                        {title.titleNumbers.map(number => (
                          <NumberText key={number}>{number}</NumberText>
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
