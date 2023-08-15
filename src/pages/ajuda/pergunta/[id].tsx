import ContactSection from '@/components/ContactSection/ContactSection';
import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { getDrawImage } from '@/utils/imageUrl';
import { useRouter } from 'next/router';
import { IoMdArrowForward } from 'react-icons/io';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { IFaqQuestion } from '@/interfaces/Faq';
import handleError from '@/utils/handleToast';
import api from '@/services/api';
import {
  BackButton,
  Banner,
  HelpSection,
  NavigatorLink,
  NavigatorQuestionTitle,
  PageContent,
  QuestionAnswer,
  QuestionHeader,
  QuestionNavigator,
  QuestionTitle,
} from './styles';

const FaqQuestionPage = () => {
  const router = useRouter();
  const { currentDraw } = useCurrentDraw();
  const [question, setQuestion] = useState<IFaqQuestion>();
  const [isLoading, setIsLoading] = useState(false);

  const { id: faqQuestionId } = router.query;

  useEffect(() => {
    if (faqQuestionId) {
      getFaqQuestion();
    }
  }, [faqQuestionId]);

  const getFaqQuestion = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get<{
        data: IFaqQuestion;
      }>(`/faq-questions/${faqQuestionId}`, {
        params: {
          populate: '*',
        },
      });

      setQuestion(data.data);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Banner src={getDrawImage(currentDraw)} alt="" />
      <PageContent>
        <NextRaffle containerMarginTop="-7rem" />
        <HelpSection>
          {isLoading ? null : (
            <>
              <QuestionHeader>
                <BackButton onClick={router.back}>
                  <IoChevronBackCircleOutline />
                </BackButton>
                <QuestionTitle>{question?.attributes?.question}</QuestionTitle>
              </QuestionHeader>
              <QuestionNavigator>
                <NavigatorLink
                  href={`/ajuda/artigos/${question?.attributes?.faq?.data?.id}`}
                >
                  {question?.attributes?.faq?.data?.attributes?.title}
                </NavigatorLink>
                <IoMdArrowForward />
                <NavigatorQuestionTitle>
                  {question?.attributes?.question}
                </NavigatorQuestionTitle>
              </QuestionNavigator>
              <QuestionAnswer>{question?.attributes?.response}</QuestionAnswer>
            </>
          )}
          <ContactSection />
        </HelpSection>
      </PageContent>
    </Layout>
  );
};

export default FaqQuestionPage;
