import {
  BottomSection,
  CompanyColumn,
  CompanyLogo,
  CompanyName,
  Container,
  TermsColumn,
  TopSection,
  TopSectionDescription,
  TopSectionLogo,
  TopSectionTitle,
} from './styles';

const HomeFooter = () => {
  return (
    <Container>
      <TopSection>
        <TopSectionLogo src="/apae.png" />
        <div>
          <TopSectionTitle>CESSÃO DE RESGATE</TopSectionTitle>
          <TopSectionDescription>
            Você pode ajudar a APAE, comprando o MTCAP
            e cedendo o direito de resgate.
          </TopSectionDescription>
        </div>
      </TopSection>
      <BottomSection>
        <CompanyColumn>
          <CompanyName>MTCAP - TÍTULO DE CAPITALIZAÇÃO</CompanyName>
          <CompanyLogo src="capemisa.png" />
        </CompanyColumn>
        <TermsColumn>
          Título de Capitalização da Modalidade Filantropia Premiável de Contribuição Única,
          emitido pela CAPEMISA Capitalização S/A, CNPJ 14.056.028/0001-55, aprovado pelo
          Processo SUSEP indicado no título. CONTATO LOCAL: (65) 3055-1100/3365-6562.
          SAC 0800 940 1130. OUVIDORIA 0800 707 4936, de segunda a sexta-feira, das 8h às 17h.
          É proibida a venda de título de capitalização a menores de dezesseis anos. 
          O valor não exigido dentro do prazo prescricional, estabelecido pela legislação em
          vigor, acarretará a perda desse direito. A aquisição deste título faculta ao adquirente
          a cessão ao direito de resgate à APAE Brasil, certificada nos termos da legislação em vigor.
          Antes de contratar consulte previamente as condições Gerais. As condições
          contratuais/regulamento deste produto protocolizadas pela sociedade junto à SUSEP
          poderão ser consultadas no endereço eletrônico www.susep.gov.br, de acordo com o
          número de processo constante da proposta. Prêmios líquidos de imposto de renda.
          Confira o resultado dos sorteios e as condições de participação em www.mtcap.com.br.
          Imagens meramente ilustrativas.
        </TermsColumn>
      </BottomSection>
    </Container>
  );
};

export default HomeFooter;
