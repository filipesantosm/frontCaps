import { useState } from 'react';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import AboutUsButton from '../AboutUsButton/AboutUsButton';
import HeaderUser from '../HeaderUser/HeaderUser';
import { FiMenu } from 'react-icons/fi';
import {
  Container,
  Content,
  Logo,
  Nav,
  StyledLink,
  BlackLabel,
  TextoBranco,
  Hamburger,
} from './styles';

const Header = () => {
  const { currentDraw } = useCurrentDraw();

  const youtubeLink = currentDraw?.attributes?.lnkYoutubeDraw || '/';

  return (
    <Container>
      <BlackLabel>
        <TextoBranco>
          É PROIBIDA A VENDA DE TÍTULOS DE CAPITALIZAÇÃO A MENORES DE 16 ANOS.
        </TextoBranco>
      </BlackLabel>
      <Content>
        <Logo src="/logo.png" alt="logo" />
        <Hamburger>
          <FiMenu size={24} />
        </Hamburger>
        <Nav>
          <StyledLink href="/">Início</StyledLink>
          <StyledLink href="/como-funciona">Como funciona</StyledLink>
          <StyledLink href="/resultados">Resultados</StyledLink>
          <StyledLink
            href={youtubeLink}
            target={youtubeLink !== '/' ? '_blank' : undefined}
            referrerPolicy={youtubeLink !== '/' ? 'no-referrer' : undefined}
          >
            Sorteio ao vivo
          </StyledLink>
          <AboutUsButton />
          <StyledLink href="/ajuda">Ajuda</StyledLink>
        </Nav>
        <HeaderUser />
      </Content>
    </Container>
  );
};

export default Header;
