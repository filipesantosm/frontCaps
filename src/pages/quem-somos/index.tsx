import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { ITerm } from '@/interfaces/Terms';
import api from '@/services/api';
import { GetServerSideProps } from 'next';
import { Banner, PageContent, Text, Title, WhoAreWeSection } from './styles';

interface Props {
  data: ITerm;
}

const WhoAreWe = ({ data }: Props) => {
  return (
    <Layout>
      <Banner src="/home-hero.png" />
      <PageContent>
        <NextRaffle />
        <WhoAreWeSection>
          <Title>Quem somos</Title>
          <Text>{data?.attributes?.description || ''}</Text>
        </WhoAreWeSection>
      </PageContent>
    </Layout>
  );
};

export default WhoAreWe;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await api.get<Props>('/term-uses/4');

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: undefined,
      },
    };
  }
};
