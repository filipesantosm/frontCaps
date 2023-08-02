import useWindowSize from '@/hooks/useWindowSize';
import { IScratchCard, ScratchCardStatus } from '@/interfaces/ScratchCard';
import ReactScratchCard from 'react-scratchcard-v2';
import LosingCard from './LosingCard';
import WinningCard from './WinningCard';
import {
  Container,
  Header,
  ScratchingContainer,
  ScratchingLogo,
  ScratchingTitle,
} from './styles';

interface Props {
  scratchCard: IScratchCard;
  onChangeStatus: (status: ScratchCardStatus) => void;
}

const ScratchCard = ({ scratchCard, onChangeStatus }: Props) => {
  const { height, width } = useWindowSize();

  const handleCompleteScratching = async () => {
    if (scratchCard.status !== 'unscratched') {
      return;
    }

    await new Promise(resolve => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          onChangeStatus('win');
        } else {
          onChangeStatus('lose');
        }

        resolve({});
      }, 300);
    });
  };

  const scratchCardHeight = (height || 0) * 0.6;
  const scratchCardWidth = Math.min((height || 0) * 0.9, (width || 0) * 0.9);

  return (
    <Container>
      <Header>
        <p>Nº do título referente</p>
        <p>{scratchCard.code}</p>
      </Header>
      <ReactScratchCard
        height={scratchCardHeight}
        width={scratchCardWidth}
        image={
          scratchCard.status === 'unscratched'
            ? '/scratch-card-placeholder.png'
            : '/transparent.png'
        }
        finishPercent={scratchCard.status !== 'unscratched' ? 0 : 70}
        onComplete={handleCompleteScratching}
        brushSize={50}
      >
        {scratchCard.status === 'unscratched' && (
          <ScratchingContainer>
            <ScratchingLogo src="/logo.png" />
            <ScratchingTitle>Raspou, ganhou!</ScratchingTitle>
          </ScratchingContainer>
        )}
        {scratchCard.status === 'win' && <WinningCard />}
        {scratchCard.status === 'lose' && <LosingCard />}
      </ReactScratchCard>
    </Container>
  );
};

export default ScratchCard;
