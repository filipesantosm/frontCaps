import { PromoOption, useCurrentDraw } from '@/hooks/useCurrentDraw';
import { formatCurrency } from '@/utils/formatCurrency';
import { secondsToDuration } from '@/utils/secondsToDuration';
import { differenceInSeconds, isBefore, parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import ShadowSelect from '../ShadowSelect/ShadowSelect';
import {
  BuyButton,
  BuyContainer,
  CartIconWrapper,
  Container,
  CountdownContainer,
  CountdownItem,
  LeftSection,
  RightSection,
  RightTitle,
  Title,
} from './styles';

interface Props {
  containerMarginTop?: string;
}

const NextRaffle = ({ containerMarginTop }: Props) => {
  const router = useRouter();
  const {
    currentDraw,
    setSelectedDrawPromo,
    selectedDrawPromo,
    promoOptions,
    disablePurchase,
    setDisablePurchase,
  } = useCurrentDraw();

  const drawDate = currentDraw
    ? parseISO(
        currentDraw?.attributes?.dateDraw || currentDraw?.attributes?.dateFinal,
      )
    : undefined;

  const finalDate = currentDraw?.attributes?.dateFinal
    ? parseISO(currentDraw?.attributes.dateFinal)
    : undefined;

  const [durationToNext, setDurationToNext] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!drawDate) {
      return;
    }

    const interval = setInterval(() => {
      const now = new Date();

      if (isBefore(drawDate, now)) {
        setDurationToNext({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        setDisablePurchase(true);

        clearInterval(interval);

        return;
      }

      if (finalDate && isBefore(finalDate, now)) {
        setDisablePurchase(true);
      }

      const durationInSeconds = differenceInSeconds(drawDate, now);

      setDurationToNext(secondsToDuration(durationInSeconds));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentDraw]);

  return (
    <Container
      style={{
        marginTop: containerMarginTop,
      }}
    >
      <LeftSection>
        <Title>PARTICIPE AGORA!</Title>
        <BuyContainer>
          <ShadowSelect
            defaultValue={promoOptions[0]}
            options={promoOptions}
            noOptionsMessage={() => 'Nenhuma opção disponível'}
            value={selectedDrawPromo}
            onChange={option => {
              if (option) {
                setSelectedDrawPromo(option as PromoOption);
              } else {
                setSelectedDrawPromo(undefined);
              }
            }}
          />
          <BuyButton
            type="button"
            onClick={() => router.push('/comprar')}
            disabled={disablePurchase}
          >
            Comprar{' '}
            {selectedDrawPromo ? formatCurrency(selectedDrawPromo?.price) : ''}
            <CartIconWrapper>
              <PiShoppingCartSimpleFill />
            </CartIconWrapper>
          </BuyButton>
        </BuyContainer>
      </LeftSection>
      <RightSection>
        <RightTitle>Próximo sorteio em</RightTitle>
        <CountdownContainer>
          <CountdownItem>
            <span>{durationToNext.days.toString().padStart(2, '0')}</span>
          </CountdownItem>
          <CountdownItem
            style={{
              marginLeft: '0.5rem',
            }}
          >
            <span>{durationToNext.hours.toString().padStart(2, '0')}</span>
          </CountdownItem>
          :
          <CountdownItem>
            <span>{durationToNext.minutes.toString().padStart(2, '0')}</span>
          </CountdownItem>
          :
          <CountdownItem>
            <span>{durationToNext.seconds.toString().padStart(2, '0')}</span>
          </CountdownItem>
        </CountdownContainer>
      </RightSection>
    </Container>
  );
};

export default NextRaffle;
