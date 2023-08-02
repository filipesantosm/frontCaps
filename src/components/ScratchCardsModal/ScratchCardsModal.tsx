import { useOutside } from '@/hooks/useOutside';
import { IScratchCard, ScratchCardStatus } from '@/interfaces/ScratchCard';
import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ScratchCard from '../ScratchCard/ScratchCard';
import {
  CardWrapper,
  Container,
  Content,
  NavigationButton,
  PaginationContainer,
  PaginationItem,
} from './styles';

interface Props {
  onClose: () => void;
  scratchCards: IScratchCard[];
  setScratchCards: React.Dispatch<React.SetStateAction<IScratchCard[]>>;
  initialIndex: number;
}

const ScratchCardsModal = ({
  initialIndex,
  scratchCards,
  onClose,
  setScratchCards,
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleChangeStatus = (status: ScratchCardStatus) => {
    setScratchCards(prev =>
      prev.map((scratchCard, index) =>
        index === selectedIndex
          ? {
              ...scratchCard,
              status,
            }
          : scratchCard,
      ),
    );
  };

  useOutside(contentRef, onClose);

  return (
    <Container>
      <Content ref={contentRef}>
        <CardWrapper>
          <ScratchCard
            key={scratchCards[selectedIndex].code}
            scratchCard={scratchCards[selectedIndex]}
            onChangeStatus={handleChangeStatus}
          />
        </CardWrapper>
        <PaginationContainer>
          <NavigationButton
            type="button"
            disabled={selectedIndex === 0}
            onClick={() => setSelectedIndex(prev => prev - 1)}
          >
            <FaChevronLeft />
          </NavigationButton>
          {scratchCards.map((scratchCard, index) => (
            <PaginationItem
              key={scratchCard.code}
              status={scratchCard.status}
              type="button"
              onClick={() => setSelectedIndex(index)}
              isActive={selectedIndex === index}
            >
              {index + 1}
            </PaginationItem>
          ))}
          <NavigationButton
            type="button"
            disabled={selectedIndex === scratchCards.length - 1}
            onClick={() => setSelectedIndex(prev => prev + 1)}
          >
            <FaChevronRight />
          </NavigationButton>
        </PaginationContainer>
      </Content>
    </Container>
  );
};

export default ScratchCardsModal;
