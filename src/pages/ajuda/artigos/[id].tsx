/* eslint-disable react/no-array-index-key */
import ContactSection from '@/components/ContactSection/ContactSection';
import HelpSearchBar from '@/components/HelpSearchBar/HelpSearchBar';
import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { IFaq, IFaqQuestion } from '@/interfaces/Faq';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import { getDrawImage } from '@/utils/imageUrl';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
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

const subArrayLength = 6;

type QuestionsArray = IFaqQuestion[][];

const createQuestionsArray = (faqQuestions: IFaqQuestion[]): QuestionsArray => {
  const matrix: QuestionsArray = [];
  for (let i = 0; i < faqQuestions.length; i += subArrayLength) {
    matrix.push(faqQuestions.slice(i, i + subArrayLength));
  }
  return matrix;
};

const FaqArticles = () => {
  const router = useRouter();
  const { currentDraw } = useCurrentDraw();
  const { id: faqId } = router.query;

  const [faq, setFaq] = useState<IFaq>();

  useEffect(() => {
    if (faqId) {
      getFaq();
    }
  }, [faqId]);

  const getFaq = async () => {
    try {
      const { data } = await api.get<{
        data: IFaq;
      }>(`/faqs/${faqId}`, {
        params: {
          populate: '*',
        },
      });

      setFaq(data.data);
    } catch (error) {
      handleError(error);
    }
  };

  const questionsArray = useMemo(() => {
    return faq ? createQuestionsArray(faq?.attributes.faq_questions.data) : [];
  }, [faq]);

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
          <SearchTitle>{faq?.attributes?.title}</SearchTitle>
          <QuestionsList>
            {questionsArray.map((questionArray, index) => (
              <QuestionsCard key={index}>
                {questionArray.map(faqQuestion => (
                  <QuestionLink
                    key={faqQuestion.id}
                    href={`/ajuda/pergunta/${faqQuestion.id}`}
                  >
                    {faqQuestion.attributes.question}
                  </QuestionLink>
                ))}
              </QuestionsCard>
            ))}
          </QuestionsList>

          <ContactSection />
        </HelpSection>
      </PageContent>
    </Layout>
  );
};

export default FaqArticles;
