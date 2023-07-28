/* eslint-disable react/no-array-index-key */
import Layout from '@/components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { FaCartPlus } from 'react-icons/fa';
import { ICartItem } from '@/interfaces/Cart';
import handleError from '@/utils/handleToast';
import { useRouter } from 'next/router';
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
  LoadMoreButton,
  LoadingIcon,
  LoadingWrapper,
  NumberInput,
  NumberInputsContainer,
  PageContent,
  Title,
  Toggle,
} from './styles';

const numbersArray = Array.from({ length: 20 }).map((_, index) => index + 1);

const ChooseTitles = () => {
  const router = useRouter();
  const { cartItems, toggleCartItem } = useCart();
  const [cards, setCards] = useState<ICartItem[]>([]);
  const [isChoosingNumbers, setIsChoosingNumbers] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [inputNumbers, setInputNumbers] = useState(['', '', '', '']);

  useEffect(() => {
    getCards();
  }, [page]);

  const getCards = async () => {
    setIsLoadingMore(true);
    try {
      // TODO: integrar
      await new Promise(resolve => {
        setTimeout(() => {
          resolve({});
        }, 300);
      });
      setCards(
        Array.from({ length: page * 9 }).map((_, index) => ({
          code: (931784 + index).toString(),
          luckyNumber: '225.029',
          numbers: numbersArray,
        })),
      );
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
      prev.map((value, idx) => (index === idx ? e.target.value : value)),
    );
  };

  return (
    <Layout>
      <PageContent>
        <Title>Escolher título</Title>
        <ChooseNumbersLabel>
          <Toggle
            type="checkbox"
            checked={isChoosingNumbers}
            onChange={e => setIsChoosingNumbers(e.target.checked)}
          />
          Quero escolher meus números
        </ChooseNumbersLabel>
        <div
          style={{
            maxWidth: '62.5rem',
          }}
        >
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
              <FinishPurchaseButton
                type="button"
                onClick={() => router.push('/finalizar-compra')}
              >
                Concluir compra ({cartItems.length})
              </FinishPurchaseButton>
            )}
          </NumberInputsContainer>
          <CardList>
            {cards.map(card => {
              const isInCart = cartItems.some(
                cartItem => cartItem.code === card.code,
              );
              return (
                <Card key={card.code}>
                  <CardHeader>
                    <CardHeaderInfos>
                      <CardHeaderText>N° do título</CardHeaderText>
                      <CardHeaderText>N° da sorte</CardHeaderText>
                    </CardHeaderInfos>
                    <CardHeaderInfos>
                      <CardHeaderText>{card.code}</CardHeaderText>
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
                    {card.numbers.map(number => (
                      <CardNumber
                        key={`${card.code}-${number}`}
                        isSelectedNumber={inputNumbers.some(
                          value => Number(value) === number,
                        )}
                      >
                        {number.toString().padStart(2, '0')}
                      </CardNumber>
                    ))}
                  </CardBody>
                </Card>
              );
            })}
          </CardList>
          {isLoadingMore ? (
            <LoadingWrapper>
              <LoadingIcon />
            </LoadingWrapper>
          ) : (
            <LoadMoreButton
              type="button"
              onClick={() => setPage(prev => prev + 1)}
            >
              Me mostre mais opções
            </LoadMoreButton>
          )}
        </div>
      </PageContent>
    </Layout>
  );
};

export default ChooseTitles;
