import ContactSection from '@/components/ContactSection/ContactSection';
import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { useRouter } from 'next/router';
import { IoMdArrowForward } from 'react-icons/io';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
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

  return (
    <Layout>
      <Banner src="/home-hero.png" />
      <PageContent>
        <NextRaffle containerMarginTop="-7rem" />
        <HelpSection>
          <QuestionHeader>
            <BackButton onClick={router.back}>
              <IoChevronBackCircleOutline />
            </BackButton>
            <QuestionTitle>Como comprar títulos online?</QuestionTitle>
          </QuestionHeader>
          <QuestionNavigator>
            <NavigatorLink href="/ajuda/artigos/1">Como comprar</NavigatorLink>
            <IoMdArrowForward />
            <NavigatorQuestionTitle>
              Como comprar títulos online?
            </NavigatorQuestionTitle>
          </QuestionNavigator>
          <QuestionAnswer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac nunc finibus arcu efficitur scelerisque. Cras quis pretium erat.
            In eu nisl et velit ullamcorper maximus in eu mauris. Cras eget
            mollis nunc, quis pretium erat. Pellentesque risus nisi, congue id
            quam ut, dapibus vehicula dolor. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Ut
            quis fermentum libero. Aenean ut imperdiet purus. Sed maximus
            maximus magna ut scelerisque. Aliquam eu posuere ante. Quisque
            ullamcorper bibendum scelerisque. Mauris blandit varius laoreet.
            Maecenas ac aliquet enim, non iaculis risus.
            <br />
            <br />
            Nullam ut arcu non erat lacinia rhoncus. Morbi volutpat ut nunc nec
            lacinia. Pellentesque efficitur placerat eros sed rutrum. Etiam
            tempor venenatis arcu ut vestibulum. Ut aliquet diam et venenatis
            finibus. Suspendisse euismod id odio sit amet efficitur. Nunc lorem
            nunc, tincidunt quis est in, ornare varius eros. Ut congue, ex id
            finibus dictum, nisl turpis dapibus lacus, sit amet tincidunt felis
            est sodales diam. Morbi at ipsum magna. In hac habitasse platea
            dictumst.
          </QuestionAnswer>
          <ContactSection />
        </HelpSection>
      </PageContent>
    </Layout>
  );
};

export default FaqQuestionPage;
