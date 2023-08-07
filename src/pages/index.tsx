import HomeFooter from '@/components/HomeFooter/HomeFooter';
import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import PlatformNumbers from '@/components/PlatformNumbers/PlatformNumbers';
import Results from '@/components/Results/Results';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { getDrawImage } from '@/utils/imageUrl';
import { format, nextDay, parseISO } from 'date-fns';
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

const Home = () => {
  const { currentDraw } = useCurrentDraw();

  const drawDate = currentDraw
    ? parseISO(
        currentDraw?.attributes?.dateDraw || currentDraw?.attributes?.dateFinal,
      )
    : undefined;

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
            {drawDate && (
              <RaffleDescription>
                Estaremos online no dia {format(drawDate, 'dd/MM/yyyy')}
              </RaffleDescription>
            )}
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
