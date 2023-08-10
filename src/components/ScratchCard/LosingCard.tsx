import { format } from 'date-fns';
import {
  LosingContainer,
  LosingDate,
  LosingTitle,
  ScratchingLogo,
} from './styles';

const LosingCard = () => {
  return (
    <LosingContainer>
      <ScratchingLogo src="/logo.png" />
      <LosingTitle>Tente novamente!</LosingTitle>
      <LosingDate>{format(new Date(), "dd/MM 'às' HH:mm'H'")}</LosingDate>
    </LosingContainer>
  );
};

export default LosingCard;
