import {
  Card,
  CardDescription,
  CardLabel,
  CardValue,
  CardsContainer,
  Container,
  Title,
} from './styles';

const PlatformNumbers = () => {
  return (
    <Container>
      <Title>Nossos números</Title>
      <CardsContainer>
        <Card>
          <CardValue>11</CardValue>
          <CardLabel>ANOS</CardLabel>

          <CardDescription>
            Realizando sonhos de Mato Grosso e Região
          </CardDescription>
        </Card>
        <Card>
          <CardValue>10.044</CardValue>
          <CardLabel>GANHADORES</CardLabel>

          <CardDescription>
            Mais de 10.044 ganhadores nesses 10 anos
          </CardDescription>
        </Card>
        <Card>
          <CardValue>14M</CardValue>
          <CardLabel>DOADOS</CardLabel>

          <CardDescription>
            Mais de 14 milhões doados para a APAE
          </CardDescription>
        </Card>
      </CardsContainer>
    </Container>
  );
};

