import HomeFooter from '@/components/HomeFooter/HomeFooter';
import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import PlatformNumbers from '@/components/PlatformNumbers/PlatformNumbers';
import Results from '@/components/Results/Results';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { getDrawImage } from '@/utils/imageUrl';
import { format, nextDay } from 'date-fns';
import { IoLogoWhatsapp } from 'react-icons/io';
import {
  FloatingContactButton,
  HeroImage,
  HomeContent,
  RaffleDescription,
  RaffleHeader,
  RaffleImage,
  RaffleInformation,
  RaffleTitle,
} from './styles';

const nextRaffleDate = nextDay(new Date(), 0);

const Home = () => {
  const { currentDraw } = useCurrentDraw();

  return (
    <Layout>
      <HeroImage src={getDrawImage(currentDraw)} />
      <HomeContent>
        <NextRaffle containerMarginTop="-7rem" />
        <RaffleInformation>
          <RaffleHeader>
            <RaffleTitle>
              Acompanhe nosso sorteio online pelo youtube!
            </RaffleTitle>
            <RaffleDescription>
              Estaremos online no dia {format(nextRaffleDate, 'dd/MM/yyyy')}
            </RaffleDescription>
          </RaffleHeader>
          <RaffleImage src={getDrawImage(currentDraw)} />
        </RaffleInformation>

        <Results />

        <PlatformNumbers />

        <HomeFooter />
      </HomeContent>

      <FloatingContactButton type="button">
        <IoLogoWhatsapp />
        Fale com a gente!
      </FloatingContactButton>
    </Layout>
  );
};

export default Home;
