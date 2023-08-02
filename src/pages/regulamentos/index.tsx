import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { ITerm } from '@/interfaces/Terms';
import api from '@/services/api';
import { GetServerSideProps } from 'next';
import { Banner, PageContent, RulesSection, Text, Title } from './styles';

interface Props {
  data: ITerm;
}

const Rules = ({ data }: Props) => {
  return (
    <Layout>
      <Banner src="/home-hero.png" />
      <PageContent>
        <NextRaffle />
        <RulesSection>
          <Title>Regulamentos</Title>
          <Text>{data?.attributes?.description || ''}</Text>
        </RulesSection>
      </PageContent>
    </Layout>
  );
};

export default Rules;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await api.get<Props>('/term-uses/2');

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
