import { FaPlusCircle } from 'react-icons/fa';
import {
  AddCardButton,
  CardOption,
  Checkbox,
  Container,
  ContinueButton,
} from './styles';

interface Props {
  onClickAddCard: () => void;
  onSuccess: () => void;
  onError: () => void;
}

const CreditCardList = ({ onClickAddCard, onError, onSuccess }: Props) => {
  return (
    <Container>
      <CardOption>
        <Checkbox type="checkbox" />
        **** 2566
      </CardOption>
      <AddCardButton type="button" onClick={onClickAddCard}>
        <FaPlusCircle />
        Adicionar novo cartão
      </AddCardButton>
      <ContinueButton
        onClick={() => {
          // TODO: REMOVER, USADO PARA TESTE
          if (Math.random() > 0.5) {
            onSuccess();
          } else {
            onError();
          }
        }}
      >
        Realizar pagamento
      </ContinueButton>
    </Container>
  );
};

export default CreditCardList;
