import ContactSection from '@/components/ContactSection/ContactSection';
import HelpSearchBar from '@/components/HelpSearchBar/HelpSearchBar';
import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { getDrawImage } from '@/utils/imageUrl';
import { useRouter } from 'next/router';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import {
  BackButton,
  Banner,
  HelpSection,
  PageContent,
  QuestionHeader,
  QuestionLink,
  QuestionsCard,
  QuestionsList,
  SearchTitle,
} from './styles';

const FaqArticles = () => {
  const router = useRouter();
  const { currentDraw } = useCurrentDraw();

  return (
    <Layout>
      <Banner src={getDrawImage(currentDraw)} />
      <PageContent>
        <NextRaffle containerMarginTop="-7rem" />

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
