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
        <TopSectionLogo src="/bos.png" />
        <div>
          <TopSectionTitle>CESSÃO DE RESGATE</TopSectionTitle>
          <TopSectionDescription>
            Você pode ajudar o Banco de Olhos de Sorocaba, comprando o SUPERCAP
            e cedendo o direito de resgate.
          </TopSectionDescription>
        </div>
      </TopSection>
      <BottomSection>
        <CompanyColumn>
          <CompanyName>SUPERCAP - TÍTULO DE CAPITALIZAÇÃO</CompanyName>
          <CompanyLogo src="/kvrcapitalizacao.png" />
        </CompanyColumn>
        <TermsColumn>
          Escritório Central: Rua Horácio Cenci, nº 75 – Ed. West Point, 10º
          Andar PQ. Campolim Sorocaba – SP Central de Atendimento:
          faleconosco@supercapsp.com.br – (15) 3035.2699 Sorteios decorrentes de
          Títulos de Capitalização de Pagamento Único, da Modalidade Filantropia
          Premiável, emitidos pela KOVR Capitalização S/A., inscrita no CNPJ sob
          nº 93.202.448/0001-79 e aprovados pela SUSEP. AO ADQUIRIR O TÍTULO DE
          CAPITALIZAÇÃO VOCÊ AJUDA O BOS CEDENDO O DIREITO DE RESGATE. A
          aprovação deste Título pela SUSEP não implica, por parte da Autarquia,
          em incentivo ou recomendação a sua aquisição, representando
          exclusivamente, sua adequação às normas em vigor. Antes de contratar,
          consulte previamente as Condições Gerais. MRW PARTICIPACOES SOROCABA
          LTDA – 21825829/0001-01
        </TermsColumn>
      </BottomSection>
    </Container>
  );
};

export default HomeFooter;
