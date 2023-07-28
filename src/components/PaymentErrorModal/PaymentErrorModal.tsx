import { BiSolidErrorCircle } from 'react-icons/bi';
import {
  ButtonsContainer,
  Container,
  Content,
  ContinueButton,
  Message,
  OutlinedButton,
  Separator,
  Title,
} from './styles';

interface Props {
  onClose: () => void;
  onChooseOtherMethod: () => void;
}

const PaymentErrorModal = ({ onClose, onChooseOtherMethod }: Props) => {
  return (
    <Container>
      <Content>
        <BiSolidErrorCircle color="#DE3737" size={70} />
        <Title>Problemas com pagamento</Title>
        <Message>Verifique suas informações e tente novamente</Message>
        <Separator />
        <ButtonsContainer>
          <ContinueButton onClick={onClose}>Tentar novamente</ContinueButton>
          <OutlinedButton onClick={onChooseOtherMethod}>
            Escolher novo método
          </OutlinedButton>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

export default PaymentErrorModal;
