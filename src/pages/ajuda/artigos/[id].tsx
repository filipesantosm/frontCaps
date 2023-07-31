import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import HelpSearchBar from '@/components/HelpSearchBar/HelpSearchBar';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import ContactSection from '@/components/ContactSection/ContactSection';
import { useRouter } from 'next/router';
import {
  BackButton,
  Banner,
  HelpSection,
  NextRaffleWrapper,
  PageContent,
  QuestionHeader,
  QuestionLink,
  QuestionsCard,
  QuestionsList,
  SearchTitle,
} from './styles';

const FaqArticles = () => {
  const router = useRouter();

  return (
    <Layout>
      <Banner src="/home-hero.png" />
      <PageContent>
        <NextRaffleWrapper>
          <NextRaffle />
        </NextRaffleWrapper>

        <HelpSection>
          <SearchTitle>Como podemos te ajudar?</SearchTitle>
          <HelpSearchBar placeholder="Pesquise sua dúvida" />
          <QuestionHeader>
            <BackButton onClick={router.back}>
              <IoChevronBackCircleOutline />
              voltar
            </BackButton>
          </QuestionHeader>
          <SearchTitle>Como comprar</SearchTitle>
          <QuestionsList>
            <QuestionsCard>
              <QuestionLink href="/ajuda/pergunta/1">
                Como comprar títulos online?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Onde encontro MTCAP perto de mim?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Onde encontro MTCAP perto de mim?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Como comprar títulos online?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Onde encontro MTCAP perto de mim?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Onde encontro MTCAP perto de mim?
              </QuestionLink>
            </QuestionsCard>
            <QuestionsCard>
              <QuestionLink href="/ajuda/pergunta/1">
                Como comprar títulos online?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Onde encontro MTCAP perto de mim?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Onde encontro MTCAP perto de mim?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Como comprar títulos online?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Onde encontro MTCAP perto de mim?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Onde encontro MTCAP perto de mim?
              </QuestionLink>
            </QuestionsCard>
            <QuestionsCard>
              <QuestionLink href="/ajuda/pergunta/1">
                Como comprar títulos online?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Onde encontro MTCAP perto de mim?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Onde encontro MTCAP perto de mim?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Como comprar títulos online?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Onde encontro MTCAP perto de mim?
              </QuestionLink>
              <QuestionLink href="/ajuda/pergunta/1">
                Onde encontro MTCAP perto de mim?
              </QuestionLink>
            </QuestionsCard>
          </QuestionsList>

          <ContactSection />
        </HelpSection>
      </PageContent>
    </Layout>
  );
};

export default FaqArticles;
