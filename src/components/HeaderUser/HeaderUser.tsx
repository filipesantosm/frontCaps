import { Container, LoginButton, RegisterButton } from './styles';

const HeaderUser = () => {
  return (
    <Container>
      <RegisterButton>Cadastre-se</RegisterButton>
      <LoginButton>Entrar</LoginButton>
    </Container>
  );
};

export default HeaderUser;
