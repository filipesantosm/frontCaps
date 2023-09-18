import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { ITerm } from '@/interfaces/Terms';
import api from '@/services/api';
import { getDrawImage } from '@/utils/imageUrl';
import { GetServerSideProps } from 'next';
import { Banner, PageContent, RulesSection, Text, Title } from './styles';

interface Props {
  data: ITerm;
}

const Rules = ({ data }: Props) => {
  const { currentDraw } = useCurrentDraw();

  return (
    <Layout>
      <Banner src={getDrawImage(currentDraw)} alt="" />
      <PageContent>
        <NextRaffle />
        <RulesSection>
          <Title>Condições de Participação</Title>
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
