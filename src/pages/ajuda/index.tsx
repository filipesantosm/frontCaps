/* eslint-disable react/no-array-index-key */
import ContactSection from '@/components/ContactSection/ContactSection';
import HelpSearchBar from '@/components/HelpSearchBar/HelpSearchBar';
import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { FaChevronRight } from 'react-icons/fa';
import {
  Banner,
  FaqItem,
  FaqLink,
  FaqList,
  FaqSectionTitle,
  FaqTitle,
  HelpSection,
  HelpSectionBanner,
  HelpTitle,
  LoadMoreButton,
  MoreArticlesLink,
  PageContent,
  SearchTitle,
  VideoItem,
  VideoThumbnail,
  VideoTitle,
  VideosContainer,
} from './styles';

const HelpPage = () => {
  return (
    <Layout>
      <Banner src="/home-hero.png" />
      <PageContent>
        <NextRaffle containerMarginTop="-7rem" />

        <HelpSection>
          <HelpTitle>Olá! Boas-vindas à Central de Ajuda da MTCAP</HelpTitle>

          <HelpSectionBanner src="/mtcap-banner.png" />

          <SearchTitle>Como podemos te ajudar?</SearchTitle>

          <HelpSearchBar placeholder="Pesquise sua dúvida" />

          <FaqSectionTitle>
            Consulte nosso F.A.Q (Perguntas frequentes)
          </FaqSectionTitle>
          <FaqList>
            {Array.from({ length: 9 }).map((_, index) => (
              <FaqItem key={index}>
                <FaqTitle>Como comprar</FaqTitle>
                <FaqLink href="/ajuda/pergunta/1">
                  Como comprar títulos online?
                </FaqLink>
                <FaqLink href="/ajuda/pergunta/1">
                  Onde encontro MTCAP perto de mim?
                </FaqLink>
                <FaqLink href="/ajuda/pergunta/1">
                  Onde encontro MTCAP perto de mim?
                </FaqLink>
                <MoreArticlesLink href="/ajuda/artigos/1">
                  Ver mais artigos <FaChevronRight />
                </MoreArticlesLink>
              </FaqItem>
            ))}
          </FaqList>
          <LoadMoreButton>Ver mais perguntas</LoadMoreButton>

          <VideosContainer>
            <VideoItem>
              <VideoThumbnail src="/video-thumb.png" />
              <VideoTitle>Como comprar</VideoTitle>
            </VideoItem>
            <VideoItem>
              <VideoThumbnail src="/video-thumb.png" />
              <VideoTitle>Como comprar</VideoTitle>
            </VideoItem>
            <VideoItem>
              <VideoThumbnail src="/video-thumb.png" />
              <VideoTitle>Como comprar</VideoTitle>
            </VideoItem>
          </VideosContainer>

          <LoadMoreButton>Ver mais vídeos</LoadMoreButton>

          <ContactSection />
        </HelpSection>
      </PageContent>
    </Layout>
  );
};

export default HelpPage;
