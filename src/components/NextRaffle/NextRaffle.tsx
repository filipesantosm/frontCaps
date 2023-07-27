import { intervalToDuration } from 'date-fns';
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

const raffleDate = new Date(2023, 6, 30);

const NextRaffle = () => {
  const router = useRouter();

  const [durationToNext, setDurationToNext] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = intervalToDuration({
        start: new Date(),
        end: raffleDate,
      });

      setDurationToNext({
        days:
          (duration?.days || 0) +
          (duration?.weeks || 0) * 7 +
          (duration?.months || 0) * 30,
        hours: duration?.hours || 0,
        minutes: duration?.minutes || 0,
        seconds: duration?.seconds || 0,
      });
    }, 1000);

    return () => clearInterval(interval);
    // TODO: Colocar dependência quando raffleDate for dinâmico
  }, []);

  return (
    <Container>
      <LeftSection>
        <Title>PARTICIPE AGORA!</Title>
        <BuyContainer>
          <ShadowSelect
            placeholder="1 título"
            defaultValue={{
              label: '1 Título',
              value: 1,
            }}
            options={[
              {
                label: '1 Título',
                value: 1,
              },
              {
                label: '2 Títulos',
                value: 2,
              },
              {
                label: '3 Títulos',
                value: 3,
              },
            ]}
            noOptionsMessage={() => 'Nenhuma opção encontrada'}
          />
          <BuyButton type="button" onClick={() => router.push('/comprar')}>
            Comprar R$ 50,00
            <CartIconWrapper>
              <PiShoppingCartSimpleFill size={24} />
            </CartIconWrapper>
          </BuyButton>
        </BuyContainer>
      </LeftSection>
      <RightSection>
        <RightTitle>Próximo sorteio em</RightTitle>
        <CountdownContainer>
          <CountdownItem>
            {durationToNext.days.toString().padStart(2, '0')}
          </CountdownItem>
          <CountdownItem
            style={{
              marginLeft: '0.5rem',
            }}
          >
            {durationToNext.hours.toString().padStart(2, '0')}
          </CountdownItem>
          :
          <CountdownItem>
            {durationToNext.minutes.toString().padStart(2, '0')}
          </CountdownItem>
          :
          <CountdownItem>
            {durationToNext.seconds.toString().padStart(2, '0')}
          </CountdownItem>
        </CountdownContainer>
      </RightSection>
    </Container>
  );
};

export default NextRaffle;
