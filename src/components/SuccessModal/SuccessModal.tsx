import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {
  Container,
  Content,
  ContinueButton,
  Message,
  Separator,
  Title,
} from './styles';

interface Props {
  onClose: () => void;
  title?: string;
  message: string;
}

const SuccessModal = ({ onClose, message, title = 'Sucesso!' }: Props) => {
  return (
    <Container>
      <Content>
        <FaCheckCircle color="#15C149" size={68} />
        <Title>{title}</Title>
        <Message>{message}</Message>
        <Separator />
        <ContinueButton type="button" onClick={onClose}>
          Continuar
        </ContinueButton>
      </Content>
    </Container>
  );
};

export default SuccessModal;
