import HomeFooter from '@/components/HomeFooter/HomeFooter';
import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import PlatformNumbers from '@/components/PlatformNumbers/PlatformNumbers';
import Results from '@/components/Results/Results';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { getDrawImage } from '@/utils/imageUrl';
import { format, parseISO } from 'date-fns';
import { FaYoutube } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import React, { useState, useEffect } from 'react';
import CookiePopup from '@/components/CookiePopup/CookiePopup';
import {
  FloatingContactButton,
  HeroImage,
  HomeContent,
  PlayIconWrapper,
  RaffleDescription,
  RaffleHeader,
  RaffleImage,
  RaffleImageWrapperLink,
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

  const drawImageUrl = getDrawImage(currentDraw);

  
  const [showCookiePopup, setShowCookiePopup] = useState(true);

  // Verifica se o usuário já aceitou os cookies em visitas anteriores
  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('acceptedCookies');
    if (hasAcceptedCookies) {
      setShowCookiePopup(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('acceptedCookies', 'true');
    setShowCookiePopup(false);
  };



  return (
    <Layout>
      <HeroImage src={drawImageUrl} alt="" />
      <HomeContent>
        <NextRaffle containerMarginTop="-7rem" />
        <RaffleInformation>
          <RaffleHeader>
            <RaffleTitle>
              Acompanhe nosso sorteio online pelo YouTube!
            </RaffleTitle>
            {drawDate && (
              <RaffleDescription>
                Estamos ao vivo todos os domingos a partir das 9h
                {/* Estaremos ao vivo no dia {format(drawDate, 'dd/MM/yyyy')} */}
              </RaffleDescription>
            )}
          </RaffleHeader>
          <RaffleImageWrapperLink
            href={currentDraw?.attributes?.lnkYoutube || undefined}
            target="_blank"
            rel="noreferrer"
            aria-label="Link para o vídeo promocional do sorteio"
          >
            <RaffleImage src={drawImageUrl} />
            {currentDraw?.attributes?.lnkYoutube && (
              <PlayIconWrapper>
                <FaYoutube />
              </PlayIconWrapper>
            )}
          </RaffleImageWrapperLink>
        </RaffleInformation>
      {/* Se o estado showCookiePopup for true, exibe o pop-up */}
      {showCookiePopup && <CookiePopup onAccept={handleAcceptCookies} />}
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
