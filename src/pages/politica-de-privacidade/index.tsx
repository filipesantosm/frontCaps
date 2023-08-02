import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { ITerm } from '@/interfaces/Terms';
import api from '@/services/api';
import { GetServerSideProps } from 'next';
import {
  Banner,
  PageContent,
  PrivacyPolicySection,
  Text,
  Title,
} from './styles';

interface Props {
  data: ITerm;
}

const PrivacyPolicy = ({ data }: Props) => {
  return (
    <Layout>
      <Banner src="/home-hero.png" />
      <PageContent>
        <NextRaffle />
        <PrivacyPolicySection>
          <Title>Termos de uso e política de privacidade</Title>
          <Text>{data?.attributes?.description || ''}</Text>
        </PrivacyPolicySection>
      </PageContent>
    </Layout>
  );
};

export default PrivacyPolicy;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await api.get<Props>('/term-uses/3');

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
