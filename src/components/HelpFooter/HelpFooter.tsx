import {
  Container,
  Content,
  Section,
  SectionLink,
  SectionText,
  SectionTitle,
} from './styles';

interface Props {
  showBilletSection?: boolean;
}

const HelpFooter = ({ showBilletSection = false }: Props) => {
  return (
    <Container>
      <Content>
        <Section>
          <SectionTitle>Precisa de ajuda?</SectionTitle>
          <SectionText>
            Tire suas dúvidas de como realizar o pagamento{' '}
            <SectionLink href="/ajuda">acessando aqui.</SectionLink>
          </SectionText>
        </Section>
        {showBilletSection && (
          <Section>
            <SectionTitle>Compra por boleto</SectionTitle>
            <SectionText>
              Os Títulos da MTCAP não são vendidos por boleto.{' '}
              <strong>
                O boleto é utilizado somente para adicionar saldo ao aplicativo.
              </strong>{' '}
              A compensação de boletos bancários acontece somente em dias úteis
              e pode demorar até 72hs para o banco confirmar para o MTCAP o
              recebimento. Boleto gerado em nome da Razão Social da MTCAP: CRP
              Publicidade. <br />
              <br />
              Para adicionar saldo, escolha continuar pagamento por saldo para
              gerar o boleto.
            </SectionText>
          </Section>
        )}
      </Content>
    </Container>
  );
};

export default HelpFooter;
