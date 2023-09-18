import { IScratchCard } from '@/interfaces/ScratchCard';
import { useState } from 'react';
import ScratchCardsModal from '../ScratchCardsModal/ScratchCardsModal';
import {
  AmountText,
  CardHeader,
  Container,
  Description,
  List,
  ScratchCard,
  UnscratchedCardContent,
} from './styles';

const initialScratchCards: IScratchCard[] = [
  {
    code: '0931784',
    status: 'unscratched',
  },
  {
    code: '0931785',
    status: 'unscratched',
  },
  {
    code: '0931786',
    status: 'unscratched',
  },
];

const ScratchCardsList = () => {
  const [scratchCards, setScratchCards] =
    useState<IScratchCard[]>(initialScratchCards);
  const [selectedScratchCardIndex, setSelectedScratchCardIndex] = useState<
    number | null
  >(null);

  return (
    <Container>
      <AmountText>VOCÊ POSSUI {scratchCards.length} RASPADINHAS!</AmountText>
      <List>
        {scratchCards.map((card, index) => (
          <ScratchCard key={card.code}>
            <CardHeader>
              <p>Nº do título referente</p>
              <p>{card.code}</p>
            </CardHeader>
            <UnscratchedCardContent
              onClick={() => setSelectedScratchCardIndex(index)}
            >
              clique para abrir
            </UnscratchedCardContent>
          </ScratchCard>
        ))}
      </List>

      <Description>
        Caso seja premiado, o valor do prêmio será adicionado como saldo na sua
        conta do MT CAP.
      </Description>
      {selectedScratchCardIndex != null && (
        <ScratchCardsModal
          setScratchCards={setScratchCards}
          initialIndex={selectedScratchCardIndex}
          scratchCards={scratchCards}
          onClose={() => setSelectedScratchCardIndex(null)}
        />
      )}
    </Container>
  );
};

export default ScratchCardsList;
