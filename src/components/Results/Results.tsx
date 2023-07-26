/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  CertificateInfo,
  CertificateText,
  CertificateTitle,
  Container,
  EditionHeader,
  ItemTop,
  ItemWinner,
  Prize,
  PrizeContainer,
  PrizeIndex,
  PrizeLiquidValue,
  PrizeName,
  ResultItem,
  ResultsHeader,
  ResultsTitle,
  SelectedNumber,
  SelectedNumbersContainer,
  SpecialPrizeBottom,
  SpecialPrizeContainer,
  SpecialPrizeDescription,
  SpecialPrizeHeader,
  SpecialPrizeName,
  SpecialWinner,
  SpecialWinnerBottom,
  SpecialWinnerList,
  TrophyImage,
  WinnerCertificateSection,
  WinnerName,
} from './styles';
import OutlinedSelect from '../OutlinedSelect/OutlinedSelect';

const mockEditions = [
  {
    label: 'Edição 198 | 16/07/2023',
    value: 198,
  },
  {
    label: 'Edição 197 | 09/07/2023',
    value: 197,
  },
  {
    label: 'Edição 196 | 02/07/2023',
    value: 196,
  },
  {
    label: 'Edição 195 | 25/06/2023',
    value: 195,
  },
  {
    label: 'Edição 194 | 18/06/2023',
    value: 194,
  },
  {
    label: 'Edição 193 | 11/06/2023',
    value: 193,
  },
];

const Results = () => {
  return (
    <Container>
      <ResultsHeader>
        <ResultsTitle>Resultados</ResultsTitle>
        <OutlinedSelect
          placeholder="Selecione a edição"
          noOptionsMessage={() => 'Nenhuma edição'}
          options={mockEditions}
          defaultValue={mockEditions[0]}
        />
      </ResultsHeader>
      <EditionHeader>Edição 198 - 16/07/2023</EditionHeader>
      <ResultItem>
        <ItemTop>
          <PrizeContainer>
            <PrizeIndex>
              <TrophyImage src="/trophy-icon.svg" />
              1° PRÊMIO
            </PrizeIndex>
            <Prize>
              <PrizeName>10 MIL REAIS</PrizeName>
              <PrizeLiquidValue>Valor líquido de R$ 10.000,00</PrizeLiquidValue>
            </Prize>
          </PrizeContainer>
          <SelectedNumbersContainer>
            {Array.from({ length: 33 }).map((_, index) => (
              <SelectedNumber key={index}>
                {(index + 1).toString().padStart(2, '0')}
              </SelectedNumber>
            ))}
          </SelectedNumbersContainer>
        </ItemTop>
        <ItemWinner>
          <WinnerName>Lênito Morais</WinnerName>
          <WinnerCertificateSection>
            <CertificateInfo>
              <CertificateTitle>TÍTULO</CertificateTitle>
              <CertificateText>365388</CertificateText>
            </CertificateInfo>
            <CertificateInfo>
              <CertificateTitle>CIDADE</CertificateTitle>
              <CertificateText>CUIABA|REG. COXIPO</CertificateText>
            </CertificateInfo>
            <CertificateInfo>
              <CertificateTitle>VENDEDOR</CertificateTitle>
              <CertificateText>ROSANE</CertificateText>
            </CertificateInfo>
            <CertificateInfo>
              <CertificateTitle>PONTOS</CertificateTitle>
              <CertificateText>14</CertificateText>
            </CertificateInfo>
          </WinnerCertificateSection>
        </ItemWinner>
      </ResultItem>
      <ResultItem>
        <ItemTop>
          <PrizeContainer>
            <PrizeIndex>
              <TrophyImage src="/trophy-icon.svg" />
              2° PRÊMIO
            </PrizeIndex>
            <Prize>
              <PrizeName>10 MIL REAIS</PrizeName>
              <PrizeLiquidValue>Valor líquido de R$ 10.000,00</PrizeLiquidValue>
            </Prize>
          </PrizeContainer>
          <SelectedNumbersContainer>
            {Array.from({ length: 33 }).map((_, index) => (
              <SelectedNumber key={index}>
                {(index + 1).toString().padStart(2, '0')}
              </SelectedNumber>
            ))}
          </SelectedNumbersContainer>
        </ItemTop>
        <ItemWinner>
          <WinnerName>Lênito Morais</WinnerName>
          <WinnerCertificateSection>
            <CertificateInfo>
              <CertificateTitle>TÍTULO</CertificateTitle>
              <CertificateText>365388</CertificateText>
            </CertificateInfo>
            <CertificateInfo>
              <CertificateTitle>CIDADE</CertificateTitle>
              <CertificateText>CUIABA|REG. COXIPO</CertificateText>
            </CertificateInfo>
            <CertificateInfo>
              <CertificateTitle>VENDEDOR</CertificateTitle>
              <CertificateText>ROSANE</CertificateText>
            </CertificateInfo>
            <CertificateInfo>
              <CertificateTitle>PONTOS</CertificateTitle>
              <CertificateText>14</CertificateText>
            </CertificateInfo>
          </WinnerCertificateSection>
        </ItemWinner>
      </ResultItem>
      <ResultItem>
        <ItemTop>
          <PrizeContainer isMainPrize>
            <PrizeIndex isMainPrize>
              <TrophyImage src="/trophy-icon.svg" />
              3° PRÊMIO
            </PrizeIndex>
            <Prize isMainPrize>
              <PrizeName isMainPrize>JEEP COMPASS</PrizeName>
              <PrizeLiquidValue>
                Valor líquido de R$ 160.000,00
              </PrizeLiquidValue>
            </Prize>
          </PrizeContainer>
          <SelectedNumbersContainer>
            {Array.from({ length: 33 }).map((_, index) => (
              <SelectedNumber key={index}>
                {(index + 1).toString().padStart(2, '0')}
              </SelectedNumber>
            ))}
          </SelectedNumbersContainer>
        </ItemTop>
        <ItemWinner>
          <WinnerName>Lênito Morais</WinnerName>
          <WinnerCertificateSection>
            <CertificateInfo>
              <CertificateTitle>TÍTULO</CertificateTitle>
              <CertificateText>365388</CertificateText>
            </CertificateInfo>
            <CertificateInfo>
              <CertificateTitle>CIDADE</CertificateTitle>
              <CertificateText>CUIABA|REG. COXIPO</CertificateText>
            </CertificateInfo>
            <CertificateInfo>
              <CertificateTitle>VENDEDOR</CertificateTitle>
              <CertificateText>ROSANE</CertificateText>
            </CertificateInfo>
            <CertificateInfo>
              <CertificateTitle>PONTOS</CertificateTitle>
              <CertificateText>14</CertificateText>
            </CertificateInfo>
          </WinnerCertificateSection>
        </ItemWinner>
      </ResultItem>

      <SpecialPrizeContainer>
        <SpecialPrizeHeader>
          <TrophyImage src="/trophy-icon.svg" />
          PRÊMIO ESPECIAL
        </SpecialPrizeHeader>
        <SpecialPrizeBottom>
          <SpecialPrizeName>10 PRÊMIOS DE R$ 1.500,00</SpecialPrizeName>
          <SpecialPrizeDescription>
            Valor líquido de R$ 1.500,00
          </SpecialPrizeDescription>
        </SpecialPrizeBottom>
      </SpecialPrizeContainer>

      <SpecialWinnerList>
        {Array.from({ length: 10 }).map((_, index) => (
          <SpecialWinner key={index}>
            <WinnerName>Lênito Morais</WinnerName>
            <SpecialWinnerBottom>
              <CertificateInfo>
                <CertificateTitle>CIDADE</CertificateTitle>
                <CertificateText>CUIABA|REG. COXIPO</CertificateText>
              </CertificateInfo>
              <CertificateInfo>
                <CertificateTitle>VENDEDOR</CertificateTitle>
                <CertificateText>ROSANE</CertificateText>
              </CertificateInfo>
              <CertificateInfo>
                <CertificateTitle>TÍTULO</CertificateTitle>
                <CertificateText>365388</CertificateText>
              </CertificateInfo>
            </SpecialWinnerBottom>
          </SpecialWinner>
        ))}
      </SpecialWinnerList>
    </Container>
  );
};

export default Results;
