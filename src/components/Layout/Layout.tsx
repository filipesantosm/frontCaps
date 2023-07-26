import { Container, Content } from './styles';
import Header from '../Header/Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
