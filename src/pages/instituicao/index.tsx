import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { IInstitution } from '@/interfaces/Institution';
import { PaginatedResponse } from '@/interfaces/Paginated';
import api from '@/services/api';
import { getDrawImage, imageUrl } from '@/utils/imageUrl';
import { GetServerSideProps } from 'next';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import {
  Banner,
  InstitutionBanner,
  InstitutionLogo,
  InstitutionName,
  InstitutionNameContainer,
  PageContent,
  PrivacyPolicySection,
  Text,
  Title,
} from './styles';

interface Props {
  institution?: IInstitution;
}

const Institution = ({ institution }: Props) => {
  const { currentDraw } = useCurrentDraw();

  return (
    <Layout>
      <Banner src={getDrawImage(currentDraw)} />
      <PageContent>
        <NextRaffle />
        <PrivacyPolicySection>
          <Title>Instituição Beneficiada</Title>

          <InstitutionBanner src="/institution/institution-banner.png" />
          <InstitutionNameContainer>
            <InstitutionLogo
              src={imageUrl(
                institution?.attributes?.image?.data?.attributes?.url,
              )}
            />
            <InstitutionName>{institution?.attributes.name}</InstitutionName>
          </InstitutionNameContainer>

          <Text>{institution?.attributes.text}</Text>
        </PrivacyPolicySection>
      </PageContent>
    </Layout>
  );
};

export default Institution;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await api.get<PaginatedResponse<IInstitution>>(
      '/institution-assitideds',
      {
        params: {
          populate: '*',
        },
      },
    );

    return {
      props: {
        institution: data?.data?.[0],
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
