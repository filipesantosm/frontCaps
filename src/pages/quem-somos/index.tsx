import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { ITerm } from '@/interfaces/Terms';
import api from '@/services/api';
import { getDrawImage } from '@/utils/imageUrl';
import { GetServerSideProps } from 'next';
import { Banner, PageContent, Text, Title, WhoAreWeSection } from './styles';

interface Props {
  data: ITerm;
}

const WhoAreWe = ({ data }: Props) => {
  const { currentDraw } = useCurrentDraw();

  return (
    <Layout>
      <Banner src={getDrawImage(currentDraw)} />
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
