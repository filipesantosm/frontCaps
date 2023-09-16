import {
  BottomSection,
  CompanyColumn,
  CompanyLogo,
  CompanyName,
  Container,
  TermsColumn,
} from './styles';

const HomeFooter = () => {
  return (
    <Container>
      <BottomSection>
        <CompanyColumn>
          <CompanyName>Amapá CAP - TÍTULO DE CAPITALIZAÇÃO</CompanyName>
          <CompanyLogo src="/cactvs.png" />
        </CompanyColumn>
        <TermsColumn>
          O BILHETE PREMIÁVEL AMAPA CAP, é uma promoção comercial promovida
          pelas empresas do Grupo CACTVS CACTVS INSTITUICAO DE PAGAMENTO
          S.A.CNPJ 39.696.395/0001-44, CACTVS CORRETORA DE SEGUROS CNPJ
          39.376.932/0001-79 e CACTVS MARKETPLACE CNPJ 39.942.751/0001-62,
          aprovada pela SEAE/MF sob código/número Promoção Comercial 2022/06578
          –AP e PROCESSO N.° 17377.004153/2022-74 – AP, aprovada pela SEAE/MF
          Certificado de Autorização nº 01.021911/2022 - AP, referente ao
          Processo nº 17377.004153/2022-74 – AP, com base legal na Lei Federal
          nº 5.768/1971. Poderão ser consultadas no endereço eletrônico clicando
          aqui, de acordo com o número da SEAE processo constante neste
          regulamento. Prêmios líquidos de imposto de renda.
        </TermsColumn>
      </BottomSection>
    </Container>
  );
};

export default HomeFooter;
