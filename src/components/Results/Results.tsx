/* eslint-disable react/no-array-index-key */
import { IDraw } from '@/interfaces/Draw';
import { PaginatedResponse } from '@/interfaces/Paginated';
import { GetUserWinningResponse } from '@/interfaces/Winner';
import api from '@/services/api';
import { formatCurrency } from '@/utils/formatCurrency';
import handleError from '@/utils/handleToast';
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { getEmbedFromYoutubeLink } from '@/utils/youtubeEmbed';
import OutlinedSelect from '../OutlinedSelect/OutlinedSelect';
import {
  CertificateInfo,
  CertificateText,
  CertificateTitle,
  Container,
  EditionHeader,
  EmptyText,
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
  ResultsVideoTitle,
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

interface IOption {
  value: number;
  label: string;
  formattedTitle: string;
  lnkYoutubeDraw?: string;
}

interface Props {
  showVideo?: boolean;
}

const Results = ({ showVideo = false }: Props) => {
  const [drawOptions, setDrawOptions] = useState<IOption[]>([]);
  const [selectedDrawOption, setSelectedDrawOption] = useState<IOption>();
  const [drawWinnings, setDrawWinnings] = useState<GetUserWinningResponse>();
  const [isLoadingWinners, setIsLoadingWinners] = useState(false);

  useEffect(() => {
    getDraws();
  }, []);

  useEffect(() => {
    getDrawDetails();
  }, [selectedDrawOption]);

  const getDraws = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<IDraw>>('/draws', {
        params: {
          sort: 'dateDraw:desc',
          'filters[isPublished][$eq]': false,
          'filters[active][$eq]': true,
          'filters[dateDraw][$notNull]': true,
          'filters[dateDraw][$lte]': new Date().toISOString(),
          fields: 'dateDraw,dateFinal,name,lnkYoutubeDraw',
        },
      });

      const options = data.data.map(draw => ({
        label: `${draw.attributes.name} | ${format(
          parseISO(draw.attributes.dateDraw || draw.attributes.dateFinal),
          'dd/MM/yyyy',
        )}`,
        value: draw.id,
        formattedTitle: `${draw.attributes.name} - ${format(
          parseISO(draw.attributes.dateDraw || draw.attributes.dateFinal),
          'dd/MM/yyyy',
        )}`,
        lnkYoutubeDraw: draw.attributes.lnkYoutubeDraw || undefined,
      }));

      setDrawOptions(options);
      setSelectedDrawOption(options[0]);
    } catch (error) {
      handleError(error);
    }
  };

  const getDrawDetails = async () => {
    if (!selectedDrawOption) {
      return;
    }

    setIsLoadingWinners(true);

    try {
      const { data } = await api.get<GetUserWinningResponse>(
        '/getUserWinning',
        {
          params: {
            id: selectedDrawOption.value,
          },
        },
      );

      setDrawWinnings(data);
    } catch (error) {
      setDrawWinnings(undefined);
      // handleError(error);
    } finally {
      setIsLoadingWinners(false);
    }
  };

  const hasWinners =
    drawWinnings?.entriesCategorie1?.length ||
    drawWinnings?.entriesCategorie2?.length ||
    drawWinnings?.entriesCategorie3?.length;

  const embedLink = selectedDrawOption?.lnkYoutubeDraw
    ? getEmbedFromYoutubeLink(selectedDrawOption?.lnkYoutubeDraw)
    : '';

  return (
    <Container>
      <ResultsHeader>
        <ResultsTitle>Resultados</ResultsTitle>
        <OutlinedSelect
          placeholder="Selecione o sorteio"
          noOptionsMessage={() => 'Nenhum sorteio encontrado'}
          options={drawOptions}
          value={selectedDrawOption}
          onChange={option => {
            setSelectedDrawOption(option as IOption);
          }}
        />
      </ResultsHeader>
      <EditionHeader>{selectedDrawOption?.formattedTitle}</EditionHeader>

      {!hasWinners && !isLoadingWinners && (
        <EmptyText>Nenhum ganhador encontrado</EmptyText>
      )}
      {drawWinnings?.entriesCategorie1?.map((drawPremium, index) => (
        <ResultItem key={drawPremium.id}>
          <ItemTop>
            <PrizeContainer>
              <PrizeIndex>
                <TrophyImage src="/trophy-icon.svg" />
                {drawPremium.number}º PRÊMIO
              </PrizeIndex>
              <Prize>
                <PrizeName>{drawPremium.title}</PrizeName>
                <PrizeLiquidValue>
                  Valor líquido de {formatCurrency(drawPremium.value)}
                </PrizeLiquidValue>
              </Prize>
            </PrizeContainer>
            <SelectedNumbersContainer>
              {drawPremium?.dezena?.split(',').map(value => (
                <SelectedNumber key={value}>{value}</SelectedNumber>
              ))}
            </SelectedNumbersContainer>
          </ItemTop>
          {drawPremium.draw_premium_winnings.map(winner => (
            <ItemWinner key={winner.id}>
              <WinnerName>{winner.name}</WinnerName>
              <WinnerCertificateSection>
                <CertificateInfo>
                  <CertificateTitle>TÍTULO</CertificateTitle>
                  <CertificateText>{winner.title}</CertificateText>
                </CertificateInfo>
                <CertificateInfo>
                  <CertificateTitle>CIDADE</CertificateTitle>
                  <CertificateText>{winner.city}</CertificateText>
                </CertificateInfo>
                <CertificateInfo>
                  <CertificateTitle>VENDEDOR</CertificateTitle>
                  <CertificateText>{winner.seller}</CertificateText>
                </CertificateInfo>
                {/* <CertificateInfo>
                  <CertificateTitle>PONTOS</CertificateTitle>
                  <CertificateText>{winner.}</CertificateText>
                </CertificateInfo> */}
              </WinnerCertificateSection>
            </ItemWinner>
          ))}
        </ResultItem>
      ))}
      {!!drawWinnings?.entriesCategorie2?.length &&
        drawWinnings.entriesCategorie2.length > 0 && (
          <SpecialPrizeContainer>
            <SpecialPrizeHeader>
              <TrophyImage src="/trophy-icon.svg" />
              PRÊMIO ESPECIAL
            </SpecialPrizeHeader>
            <SpecialPrizeBottom>
              <SpecialPrizeName>
                {drawWinnings?.entriesCategorie2.length === 1
                  ? '1 PRÊMIO'
                  : `${drawWinnings.entriesCategorie2.length} PRÊMIOS`}{' '}
                DE {drawWinnings?.entriesCategorie2?.[0]?.title}
              </SpecialPrizeName>
              <SpecialPrizeDescription>
                Valor líquido de{' '}
                {formatCurrency(drawWinnings?.entriesCategorie2?.[0]?.value)}
              </SpecialPrizeDescription>
            </SpecialPrizeBottom>
          </SpecialPrizeContainer>
        )}
      <SpecialWinnerList>
        {drawWinnings?.entriesCategorie2?.map(drawPremium =>
          drawPremium.draw_premium_winnings.map(winner => (
            <SpecialWinner key={winner.title}>
              <WinnerName>{winner.name}</WinnerName>
              <SpecialWinnerBottom>
                <CertificateInfo>
                  <CertificateTitle>CIDADE</CertificateTitle>
                  <CertificateText>{winner.city}</CertificateText>
                </CertificateInfo>
                <CertificateInfo>
                  <CertificateTitle>VENDEDOR</CertificateTitle>
                  <CertificateText>{winner.seller}</CertificateText>
                </CertificateInfo>
                <CertificateInfo>
                  <CertificateTitle>TÍTULO</CertificateTitle>
                  <CertificateText>{winner.title}</CertificateText>
                </CertificateInfo>
              </SpecialWinnerBottom>
            </SpecialWinner>
          )),
        )}
      </SpecialWinnerList>
      {showVideo && embedLink && (
        <>
          <ResultsVideoTitle>Veja o resultado!</ResultsVideoTitle>
          <iframe
            src={embedLink}
            title="Sorteio ao vivo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              marginTop: '2.5rem',
              width: '100%',
              aspectRatio: '16 / 9',
            }}
          />
        </>
      )}
    </Container>
  );
};

export default Results;
