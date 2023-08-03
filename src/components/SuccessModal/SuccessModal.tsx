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
  iconColor?: string;
  onContinue?: () => void;
}

const SuccessModal = ({
  onClose,
  onContinue,
  message,
  title = 'Sucesso!',
  iconColor = '#15c149',
}: Props) => {
  return (
    <Container>
      <Content>
        <FaCheckCircle color={iconColor} size={68} />
        <Title>{title}</Title>
        <Message>{message}</Message>
        <Separator />
        <ContinueButton
          type="button"
          onClick={() => {
            if (onContinue) {
              onContinue();
            }
            onClose();
          }}
        >
          Continuar
        </ContinueButton>
      </Content>
    </Container>
  );
};

export default SuccessModal;
