import { useCart } from '@/hooks/useCart';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { UserCard } from '@/interfaces/CreditCard';
import api from '@/services/api';
import { theme } from '@/styles/theme';
import handleError from '@/utils/handleToast';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import Loading from '../Loading/Loading';
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
  const { cartItems } = useCart();
  const { selectedDrawPromo } = useCurrentDraw();
  const [cards, setCards] = useState<UserCard[]>([]);
  const [selectedCardToken, setSelectedCardToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    getUserCards();
  }, []);

  const getUserCards = async () => {
    try {
      const { data } = await api.get<UserCard[]>('/getCard');

      if (data.length === 0) {
        onClickAddCard();
        return;
      }

      setCards(data);
    } catch (error) {
      handleError(error);
    }
  };

  const handleSubmit = async () => {
    if (!selectedCardToken) {
      handleError('Selecione um cartão');
      return;
    }

    setIsSubmitting(true);

    try {
      await api.post('/paymentTitle', {
        data: {
          payment_type: {
            id: 2,
          },
          tokencard: selectedCardToken,
          titles: cartItems.map(cartItem => ({
            id: cartItem.id,
          })),
          promo: selectedDrawPromo?.value,
          origin: 'Web',
        },
      });

      onSuccess();
    } catch (error) {
      handleError(error);
      onError();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      {cards.map(card => (
        <CardOption key={card.id}>
          <Checkbox
            type="checkbox"
            checked={selectedCardToken === card.tokencard}
            onChange={() => {
              setSelectedCardToken(card.tokencard);
            }}
          />
          <Icon
            icon={`brandico:${card.branch}`}
            width="2.5rem"
            color={theme.colors.primaryDark}
          />
          {card.branch} **** {card.lastDig}
        </CardOption>
      ))}
      <AddCardButton type="button" onClick={onClickAddCard}>
        <FaPlusCircle />
        Adicionar novo cartão
      </AddCardButton>
      <ContinueButton onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? <Loading iconColor="white" /> : 'Realizar pagamento'}
      </ContinueButton>
    </Container>
  );
};

export default CreditCardList;
