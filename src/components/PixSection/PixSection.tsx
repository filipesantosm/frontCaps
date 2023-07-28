import { handleSuccess } from '@/utils/handleToast';
import { differenceInSeconds } from 'date-fns';
import { useEffect, useState } from 'react';
import { FaCheckCircle, FaCopy } from 'react-icons/fa';
import { FaPix } from 'react-icons/fa6';
import {
  Column,
  Container,
  CopyCodeButton,
  Description,
  Header,
  LoadingIcon,
  PixStatus,
  ProgressBar,
  ProgressBarContainer,
  ProgressBarHeader,
  QrCodeContainer,
  QrCodeImage,
} from './styles';

interface Props {
  finalDate: Date;
}

const PixSection = ({ finalDate }: Props) => {
  const [secondsRemaining, setSecondsRemaining] = useState(
    differenceInSeconds(finalDate, new Date()),
  );
  const [pixExpired, setPixExpired] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);

  // TODO: Remover, usado para testar sucesso após > 30
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    if (hasPaid) {
      return;
    }

    const interval = setInterval(() => {
      setSecondsRemaining(() => {
        const secondsDifference = differenceInSeconds(finalDate, new Date());

        if (secondsDifference <= 0) {
          setPixExpired(true);
        }

        return Math.max(secondsDifference, 0);
      });

      setSecondsPassed(prev => {
        if (prev > 30) {
          setHasPaid(true);
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [finalDate, hasPaid]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('código');
    handleSuccess('Código copiado!');
  };

  return (
    <Container>
      <Column style={{ maxWidth: '20.3125rem' }}>
        <Header>
          <FaPix />
          Pedido cadastrado. <br />
          Aguardando pagamento:
        </Header>
        <Description>
          Você poderá ler através do seu aplicativo do banco ou utilizar o PIX
          Copia e Cola. Basta copiar o código referente ao QR Code e informar
          esse código dentro da área PIX do aplicativo do seu banco.
        </Description>
        <ProgressBarContainer>
          <ProgressBarHeader>
            <p>
              {String(Math.floor(secondsRemaining / 60)).padStart(2, '0')}:
              {String(secondsRemaining % 60).padStart(2, '0')} min
            </p>
            <p>30:00 min</p>
          </ProgressBarHeader>
          <ProgressBar progress={(secondsRemaining / (30 * 60)) * 100} />
        </ProgressBarContainer>
      </Column>
      <Column
        style={{
          maxWidth: '22rem',
        }}
      >
        <PixStatus isPaid={hasPaid}>
          {hasPaid ? (
            <>
              Pagamento realizado! <FaCheckCircle />
            </>
          ) : (
            <>
              Aguardando pagamento <LoadingIcon src="/payment-loading.svg" />
            </>
          )}
        </PixStatus>
        <QrCodeContainer>
          <QrCodeImage src="/qr-code.png" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
          placerat elit. Aenean eu massa dictum, luctus eros et, lobortis velit.
        </QrCodeContainer>
        <CopyCodeButton onClick={handleCopyCode}>
          <FaCopy />
          Copiar código
        </CopyCodeButton>
      </Column>
    </Container>
  );
};

export default PixSection;
