import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { getDrawImage, imageUrl } from '@/utils/imageUrl';
import { ITermDetails } from '@/interfaces/Terms';
import { GetServerSideProps } from 'next';
import api from '@/services/api';
import { PaginatedResponse } from '@/interfaces/Paginated';
import { useEffect } from 'react';
import handleError from '@/utils/handleToast';
import {
  Banner,
  Card,
  CardImage,
  CardText,
  CardsColumn,
  CardsList,
  HelpLink,
  HelpText,
  HelpTitle,
  HowItWorksSection,
  PageContent,
  Title,
} from './styles';

interface Props {
  termDetails: ITermDetails[];
  error?: string;
}

const HowItWorks = ({ termDetails, error }: Props) => {
  const { currentDraw } = useCurrentDraw();

  useEffect(() => {
    if (error) {
      handleError(error);
    }
  }, [error]);

  const middleIndex = Math.ceil(termDetails.length / 2);
  const firstHalf = termDetails.slice(0, middleIndex);
  const secondHalf = termDetails.slice(middleIndex);

  return (
    <Layout>
      <Banner src={getDrawImage(currentDraw)} alt="" />
      <PageContent>
        <NextRaffle />
        <HowItWorksSection>
          <Title>Como funciona</Title>

          <CardsList>
            <CardsColumn>
              {firstHalf.map(details => (
                <Card key={details.id}>
                  <CardImage
                    src={imageUrl(
                      details.attributes.image.data?.[0]?.attributes?.url,
                    )}
                  />
                  <CardText>{details.attributes.description}</CardText>
                </Card>
              ))}
            </CardsColumn>
            <CardsColumn>
              {secondHalf.map(details => (
                <Card key={details.id}>
                  <CardImage
                    src={imageUrl(
                      details.attributes.image.data?.[0]?.attributes?.url,
                    )}
                  />
                  <CardText>{details.attributes.description}</CardText>
                </Card>
              ))}
            </CardsColumn>
          </CardsList>

          <HelpTitle>Precisa de ajuda?</HelpTitle>
          <HelpText>Tire suas dúvidas com nossa equipe</HelpText>
          <HelpLink href="/ajuda">acessando aqui.</HelpLink>
        </HowItWorksSection>
      </PageContent>
    </Layout>
  );
};

export default HowItWorks;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await api.get<PaginatedResponse<ITermDetails>>(
      '/term-details',
      {
        params: {
          'filters[term_use][id][$eq]': 5,
          populate: '*',
        },
      },
    );

    return {
      props: {
        termDetails: data.data,
      },
    };
  } catch (error: any) {
    return {
      props: {
        termDetails: [],
        error: error?.response?.data?.error?.message || error?.message,
      },
    };
  }
};
