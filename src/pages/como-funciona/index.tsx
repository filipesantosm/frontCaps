import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { getDrawImage } from '@/utils/imageUrl';
import {
  Banner,
  Card,
  CardImage,
  CardText,
  CardsColumn,
  CardsList,
  HelpLink,
  HelpText,
  HelpTitle,
  HowItWorksSection,
  PageContent,
  Title,
} from './styles';

const HowItWorks = () => {
  const { currentDraw } = useCurrentDraw();

  return (
    <Layout>
      <Banner src={getDrawImage(currentDraw)} />
      <PageContent>
        <NextRaffle />
        <HowItWorksSection>
          <Title>Como funciona</Title>

          <CardsList>
            <CardsColumn>
              <Card>
                <CardImage src="/how-it-works/shopping-online.png" />
                <CardText>
                  Caso seja comprado online, os dados são automaticamente
                  registrados ao realizar o cadastro.
                </CardText>
              </Card>
              <Card>
                <CardImage src="/how-it-works/lottery.png" />
                <CardText>
                  Todos os domingos são feitos 03(três) ou 4(quatro) sorteios
                  principais, através de globo lúdico, de onde são tiradas
                  tantas bolas quantas forem necessárias até que uma ou mais
                  pessoas completem uma sequência de 20 (vinte) dezenas
                  dispostas nos títulos vendidos.
                </CardText>
              </Card>
              <Card>
                <CardImage src="/how-it-works/mesa.png" />
                <CardText>
                  Ao adquirir o seu título de capitalização, você concorre a
                  prêmios semanais únicos.
                </CardText>
              </Card>
            </CardsColumn>
            <CardsColumn>
              <Card>
                <CardImage src="/how-it-works/filling-form.png" />
                <CardText>
                  No ato da compra do título físico é necessário preencher
                  corretamente a ficha de cadastro, que encontra-se na parte
                  inferior do título, com todos os dados, para que o contemplado
                  seja identificado.
                </CardText>
              </Card>
              <Card>
                <CardImage src="/how-it-works/save-the-date.png" />
                <CardText>
                  Os sorteios são realizados todos os domingos, sempre a partir
                  das 9hrs.
                </CardText>
              </Card>
              <Card>
                <CardImage src="/how-it-works/trophy.png" />
                <CardText>
                  Os ganhadores que conseguirem completar as 20 dezenas
                  referentes ao prêmio em questão são contemplado(s) com um dos
                  prêmios oferecidos na edição correspondente.
                </CardText>
              </Card>
            </CardsColumn>
          </CardsList>

          <HelpTitle>Precisa de ajuda?</HelpTitle>
          <HelpText>Tire suas dúvidas com nossa equipe</HelpText>
          <HelpLink href="/ajuda">acessando aqui.</HelpLink>
        </HowItWorksSection>
      </PageContent>
    </Layout>
  );
};

export default HowItWorks;
