import HomeFooter from '@/components/HomeFooter/HomeFooter';
import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import Results from '@/components/Results/Results';
import { Banner, FooterWrapper, PageContent, Spacing } from './styles';

const ResultsPage = () => {
  return (
    <Layout>
      <Banner src="/home-hero.png" />
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
