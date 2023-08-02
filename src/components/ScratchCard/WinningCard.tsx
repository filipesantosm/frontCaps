import { format } from 'date-fns';
import { WinnerContainer, WinnerDate, WinnerImage } from './styles';

const WinningCard = () => {
  return (
    <WinnerContainer>
      <WinnerDate>{format(new Date(), "dd/MM 'às' HH:mm'H'")}</WinnerDate>
      <WinnerImage src="/winner-scratch.png" />
      VOCÊ GANHOU R$500,00
    </WinnerContainer>
  );
};

export default WinningCard;
