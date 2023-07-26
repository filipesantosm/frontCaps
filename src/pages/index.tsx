import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { format } from 'date-fns';
import { IoLogoWhatsapp } from 'react-icons/io';
import Results from '@/components/Results/Results';
import PlatformNumbers from '@/components/PlatformNumbers/PlatformNumbers';
import HomeFooter from '@/components/HomeFooter/HomeFooter';
import {
  FloatingContactButton,
  HeroImage,
  HomeContent,
  NextRaffleWrapper,
  RaffleDescription,
  RaffleHeader,
  RaffleImage,
  RaffleInformation,
  RaffleTitle,
} from './styles';

const Home = () => {
  const nextRaffleDate = new Date(2023, 6, 30);

  return (
    <Layout>
      <HeroImage src="/home-hero.png" />
      <NextRaffleWrapper>
        <NextRaffle />
      </NextRaffleWrapper>
      <HomeContent>
        <RaffleInformation>
          <RaffleHeader>
            <RaffleTitle>
              Acompanhe nosso sorteio online pelo youtube!
            </RaffleTitle>
            <RaffleDescription>
              Estaremos online no dia {format(nextRaffleDate, 'dd/MM/yyyy')}
            </RaffleDescription>
          </RaffleHeader>
          <RaffleImage src="/home-hero.png" />
        </RaffleInformation>

        <Results />

        <PlatformNumbers />

        <HomeFooter />
      </HomeContent>

      <FloatingContactButton type="button">
        <IoLogoWhatsapp size={40} />
        Fale com a gente!
      </FloatingContactButton>
    </Layout>
  );
};

export default Home;
