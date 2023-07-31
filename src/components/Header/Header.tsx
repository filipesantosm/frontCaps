import AboutUsButton from '../AboutUsButton/AboutUsButton';
import HeaderUser from '../HeaderUser/HeaderUser';
import { Container, Content, StyledLink, Logo, Nav } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo src="/logo.png" />
        <Nav>
          <StyledLink href="/">Início</StyledLink>
          <StyledLink href="/como-funciona">Como funciona</StyledLink>
          <StyledLink href="/">Resultados</StyledLink>
          <StyledLink href="/">Sorteio ao vivo</StyledLink>
          <AboutUsButton />
          <StyledLink href="/ajuda">Ajuda</StyledLink>
        </Nav>
        <HeaderUser />
      </Content>
    </Container>
  );
};

export default Header;
