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
          <CardValue>8</CardValue>
          <CardLabel>ANOS</CardLabel>

          <CardDescription>
            Realizando sonhos de Sorocaba e Região
          </CardDescription>
        </Card>
        <Card>
          <CardValue>11.210</CardValue>
          <CardLabel>GANHADORES</CardLabel>

          <CardDescription>
            Mais de 11.210 ganhadores nesses 10 anos
          </CardDescription>
        </Card>
        <Card>
          <CardValue>14M</CardValue>
          <CardLabel>DOADOS</CardLabel>

          <CardDescription>
            Mais de 14 milhões doados para o BOS
          </CardDescription>
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default PlatformNumbers;
