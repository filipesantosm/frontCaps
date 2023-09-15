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
          <CompanyName>Maracap - TÍTULO DE CAPITALIZAÇÃO</CompanyName>
          <CompanyLogo src="/brcap.png" />
        </CompanyColumn>
        <TermsColumn>
          Escritório Central: Av. São Luís Rei de França, 12 – Olho D’Água CEP
          65067-485 São Luis / MA Central de Atendimento:
          atendimento@maracap.com.br – (98) 3303-3000
        </TermsColumn>
      </BottomSection>
    </Container>
  );
};

export default HomeFooter;
