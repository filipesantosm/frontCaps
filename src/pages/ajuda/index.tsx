/* eslint-disable react/no-array-index-key */
import ContactSection from '@/components/ContactSection/ContactSection';
import FaqList from '@/components/FaqList/FaqList';
import FaqVideosList from '@/components/FaqVideosList/FaqVideosList';
import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { getDrawImage } from '@/utils/imageUrl';
import {
  Banner,
  HelpSection,
  HelpSectionBanner,
  HelpTitle,
  PageContent,
  SearchTitle,
  Separator,
} from './styles';

const HelpPage = () => {
  const { currentDraw } = useCurrentDraw();

  return (
    <Layout>
      <Banner src={getDrawImage(currentDraw)} alt="" />
      <PageContent>
        <NextRaffle containerMarginTop="-7rem" />

        <HelpSection>
          <HelpTitle>Olá! Boas-vindas à Central de Ajuda da AmapáCAP</HelpTitle>

          <HelpSectionBanner src="/" />

          <SearchTitle>Como podemos te ajudar?</SearchTitle>

          <FaqList />

          <FaqVideosList />

          <Separator />

          <ContactSection />
        </HelpSection>
      </PageContent>
    </Layout>
  );
};

export default HelpPage;
