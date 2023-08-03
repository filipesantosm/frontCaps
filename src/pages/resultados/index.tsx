import HomeFooter from '@/components/HomeFooter/HomeFooter';
import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import Results from '@/components/Results/Results';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { getDrawImage } from '@/utils/imageUrl';
import { Banner, FooterWrapper, PageContent, Spacing } from './styles';

const ResultsPage = () => {
  const { currentDraw } = useCurrentDraw();

  return (
    <Layout>
      <Banner src={getDrawImage(currentDraw)} />
      <PageContent>
        <NextRaffle />
        <Spacing />
        <Results showVideo />
        <FooterWrapper>
          <HomeFooter />
        </FooterWrapper>
      </PageContent>
    </Layout>
  );
};

export default ResultsPage;
