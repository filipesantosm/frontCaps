/* eslint-disable react/no-array-index-key */
import { IDraw } from '@/interfaces/Draw';
import { PaginatedResponse } from '@/interfaces/Paginated';
import { GetUserWinningResponse, IWinner } from '@/interfaces/Winner';
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
  ResultsVideoImage,
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

interface IResultsWinners {
  normalPrizes: IWinner[];
  specialPrizes: IWinner[];
}

interface Props {
  showVideo?: boolean;
}

const Results = ({ showVideo = false }: Props) => {
  const [drawOptions, setDrawOptions] = useState<IOption[]>([]);
  const [selectedDrawOption, setSelectedDrawOption] = useState<IOption>();
  const [drawWinnings, setDrawWinnings] = useState<IResultsWinners>();
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
          fields: ['dateDraw', 'dateFinal', 'name', 'lnkYoutubeDraw'],
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

      if (data?.Premiados) {
        const reducedObj = data.Premiados.reduce<IResultsWinners>(
          (acc, winner) => {
            if (winner.type === 'Especial') {
              acc.specialPrizes.push(winner);
            } else {
              acc.normalPrizes.push(winner);
            }

            return acc;
          },
          {
            normalPrizes: [],
            specialPrizes: [],
          },
        );
        setDrawWinnings(reducedObj);
      } else {
        setDrawWinnings(undefined);
      }
    } catch (error) {
      setDrawWinnings(undefined);
      // handleError(error);
    } finally {
      setIsLoadingWinners(false);
    }
  };

  const hasWinners =
    drawWinnings?.normalPrizes?.length || drawWinnings?.specialPrizes?.length;

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
      {drawWinnings?.normalPrizes?.map(winner => (
        <ResultItem key={winner.title}>
          <ItemTop>
            <PrizeContainer>
              <PrizeIndex>
                <TrophyImage src="/trophy-icon.svg" />
                {winner.premiumNumber}º PRÊMIO
              </PrizeIndex>
              <Prize>
                <PrizeName>{winner.premium}</PrizeName>
                <PrizeLiquidValue>
                  Valor líquido de {formatCurrency(winner.value)}
                </PrizeLiquidValue>
              </Prize>
            </PrizeContainer>
            <SelectedNumbersContainer>
              {Object.values(winner.titlePremium).map(value => (
                <SelectedNumber key={value}>
                  {value.toString().padStart(2, '0')}
                </SelectedNumber>
              ))}
            </SelectedNumbersContainer>
          </ItemTop>
          <ItemWinner>
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
              <CertificateInfo>
                <CertificateTitle>PONTOS</CertificateTitle>
                <CertificateText>{winner.points}</CertificateText>
              </CertificateInfo>
            </WinnerCertificateSection>
          </ItemWinner>
        </ResultItem>
      ))}
      {drawWinnings?.specialPrizes?.length &&
        drawWinnings.specialPrizes.length > 0 && (
          <SpecialPrizeContainer>
            <SpecialPrizeHeader>
              <TrophyImage src="/trophy-icon.svg" />
              PRÊMIO ESPECIAL
            </SpecialPrizeHeader>
            <SpecialPrizeBottom>
              <SpecialPrizeName>
                {drawWinnings?.specialPrizes.length === 1
                  ? '1 PRÊMIO'
                  : `${drawWinnings.specialPrizes.length} PRÊMIOS`}{' '}
                DE {formatCurrency(drawWinnings?.specialPrizes?.[0]?.value)}
              </SpecialPrizeName>
              <SpecialPrizeDescription>
                Valor líquido de{' '}
                {formatCurrency(drawWinnings?.specialPrizes?.[0]?.value)}
              </SpecialPrizeDescription>
            </SpecialPrizeBottom>
          </SpecialPrizeContainer>
        )}
      <SpecialWinnerList>
        {drawWinnings?.specialPrizes?.map(specialWinner => (
          <SpecialWinner key={specialWinner.title}>
            <WinnerName>{specialWinner.name}</WinnerName>
            <SpecialWinnerBottom>
              <CertificateInfo>
                <CertificateTitle>CIDADE</CertificateTitle>
                <CertificateText>{specialWinner.city}</CertificateText>
              </CertificateInfo>
              <CertificateInfo>
                <CertificateTitle>VENDEDOR</CertificateTitle>
                <CertificateText>{specialWinner.seller}</CertificateText>
              </CertificateInfo>
              <CertificateInfo>
                <CertificateTitle>TÍTULO</CertificateTitle>
                <CertificateText>{specialWinner.title}</CertificateText>
              </CertificateInfo>
            </SpecialWinnerBottom>
          </SpecialWinner>
        ))}
      </SpecialWinnerList>
      {showVideo && embedLink && (
        <>
          <ResultsVideoTitle>Veja o resultado!</ResultsVideoTitle>
          {/* <ResultsVideoImage src="/results-video-thumb.png" /> */}
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
