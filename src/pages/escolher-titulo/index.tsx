/* eslint-disable react/no-array-index-key */
import Layout from '@/components/Layout/Layout';
import Loading from '@/components/Loading/Loading';
import { useCart } from '@/hooks/useCart';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { ICartItem, ITitle } from '@/interfaces/Cart';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import { titleToCartItem } from '@/utils/titleToCartItem';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaCartPlus } from 'react-icons/fa';
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderInfos,
  CardHeaderText,
  CardList,
  CardNumber,
  CartButton,
  CartButtonIcon,
  ChooseNumbersLabel,
  FinishPurchaseButton,
  GoBackButton,
  LoadMoreButton,
  NumberInput,
  NumberInputsContainer,
  PageBody,
  PageContent,
  Title,
  TitleContainer,
  Toggle,
} from './styles';

const ChooseTitles = () => {
  const router = useRouter();
  const { cartItems, toggleCartItem, clearCart } = useCart();
  const [cards, setCards] = useState<ICartItem[]>([]);
  const [isChoosingNumbers, setIsChoosingNumbers] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [inputNumbers, setInputNumbers] = useState(['', '', '', '']);
  const { currentDraw, selectedDrawPromo } = useCurrentDraw();

  useEffect(() => {
    getCards();
  }, [currentDraw]);

  useEffect(() => {
    clearCart();
  }, []);

  const getCards = async () => {
    if (!currentDraw) {
      return;
    }

    setIsLoadingMore(true);
    try {
      const { data } = await api.get<ITitle[]>('/getSuggestedTitle');

      clearCart();

      const suggestedCartItems = data.map(titleToCartItem);

      setCards(suggestedCartItems);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const handleInputNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    setInputNumbers(prev =>
      prev.map((value, idx) =>
        index === idx ? e.target.value.substring(0, 2) : value,
      ),
    );
  };

  const handleFinish = () => {
    if (cartItems.length % (selectedDrawPromo?.quantity || 1)) {
      handleError(
        `A quantidade de títulos deve ser múltipla de ${selectedDrawPromo?.quantity}`,
      );
      return;
    }

    router.push('/finalizar-compra');
  };

  return (
    <Layout>
      <PageContent>
        <TitleContainer>
          <Title>Escolher título</Title>
          <GoBackButton
            type="button"
            onClick={() => {
              router.push('/comprar');
            }}
          >
            <FaArrowLeft />
            Voltar
          </GoBackButton>
        </TitleContainer>
        <ChooseNumbersLabel>
          <Toggle
            type="checkbox"
            checked={isChoosingNumbers}
            onChange={e => setIsChoosingNumbers(e.target.checked)}
          />
          Quero escolher meus números
        </ChooseNumbersLabel>
        <PageBody>
          <NumberInputsContainer>
            {isChoosingNumbers &&
              inputNumbers.map((value, index) => (
                <NumberInput
                  key={index}
                  type="number"
                  min={0}
                  placeholder="00"
                  maxLength={2}
                  value={value}
                  onChange={e => handleInputNumberChange(e, index)}
                />
              ))}
            {cartItems.length > 0 && (
              <FinishPurchaseButton type="button" onClick={handleFinish}>
                Concluir compra ({cartItems.length})
              </FinishPurchaseButton>
            )}
          </NumberInputsContainer>
          <CardList>
            {!isLoadingMore &&
              cards.map(card => {
                const isInCart = cartItems.some(
                  cartItem => cartItem.id === card.id,
                );

                return (
                  <Card key={card.id}>
                    <CardHeader>
                      <CardHeaderInfos>
                        <CardHeaderText>N° do título</CardHeaderText>
                        <CardHeaderText>N° da sorte</CardHeaderText>
                      </CardHeaderInfos>
                      <CardHeaderInfos>
                        <CardHeaderText>{card.number}</CardHeaderText>
                        <CardHeaderText>{card.luckyNumber}</CardHeaderText>
                      </CardHeaderInfos>
                      <CartButton
                        isInCart={isInCart}
                        type="button"
                        onClick={() => toggleCartItem(card)}
                      >
                        {isInCart ? (
                          <>
                            <CartButtonIcon src="/cart-minus.svg" />
                            remover
                          </>
                        ) : (
                          <>
                            <FaCartPlus />
                            adicionar
                          </>
                        )}
                      </CartButton>
                    </CardHeader>
                    <CardBody>
                      {card.digits.map(numberObj => (
                        <CardNumber
                          key={`${card.id}-${numberObj.key}`}
                          isSelectedNumber={inputNumbers.some(
                            value => Number(value) === numberObj.number,
                          )}
                        >
                          {numberObj.number.toString().padStart(2, '0')}
                        </CardNumber>
                      ))}
                    </CardBody>
                  </Card>
                );
              })}
          </CardList>
          {isLoadingMore ? (
            <Loading iconFontSize="3rem" />
          ) : (
            <LoadMoreButton
              type="button"
              disabled={isLoadingMore}
              onClick={getCards}
            >
              Me mostre mais opções
            </LoadMoreButton>
          )}
        </PageBody>
      </PageContent>
    </Layout>
  );
};

export default ChooseTitles;
