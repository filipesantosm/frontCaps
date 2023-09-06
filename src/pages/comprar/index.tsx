import HomeFooter from '@/components/HomeFooter/HomeFooter';
import Layout from '@/components/Layout/Layout';
import PurchaseSelect from '@/components/PurchaseSelect/PurchaseSelect';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import { PromoOption, useCurrentDraw } from '@/hooks/useCurrentDraw';
import { ITitle } from '@/interfaces/Cart';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import { getDrawImage } from '@/utils/imageUrl';
import { titleToCartItem } from '@/utils/titleToCartItem';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import {
  ButtonArrow,
  ContestImage,
  LeftButtonContent,
  OptionButton,
  OptionsContainer,
  OptionsLabel,
  PageContent,
  PurchaseColumn,
  SelectsContainer,
  Title,
  TopSection,
} from './styles';

const Purchase = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const {
    promoOptions,
    setSelectedDrawPromo,
    selectedDrawPromo,
    currentDraw,
    disablePurchase,
  } = useCurrentDraw();
  const { setCartItems } = useCart();
  const [isBuying, setIsBuying] = useState(false);

  const isDoubleChance = !!router.query['dupla-chance'];

  const handleQuickPurchase = async () => {
    if (!isAuthenticated) {
      handleOpenLoginModal();
      return;
    }

    setIsBuying(true);

    try {
      const { data } = await api.get<ITitle[]>('/getSuggestedTitle', {
        params: {
          quantity: selectedDrawPromo?.quantity || 1,
        },
      });

      const suggestedCartItems = data.map(titleToCartItem);

      setCartItems(suggestedCartItems);

      router.push('/finalizar-compra');
    } catch (error) {
      handleError(error);
    } finally {
      setIsBuying(false);
    }
  };

  const handleChooseTitle = () => {
    if (!isAuthenticated) {
      handleOpenLoginModal();
      return;
    }

    router.push('/escolher-titulo');
  };

  const handleOpenLoginModal = () => {
    router.push({
      pathname: '',
      query: {
        modal: 'login',
      },
    });
  };

  return (
    <Layout>
      <PageContent>
        <TopSection>
          <PurchaseColumn>
            <Title>Comprar</Title>

            <SelectsContainer>
              <PurchaseSelect
                isSearchable={false}
                options={promoOptions}
                onChange={option => {
                  setSelectedDrawPromo(option as PromoOption);
                }}
                value={selectedDrawPromo}
              />
              {isDoubleChance && (
                <PurchaseSelect
                  isSearchable={false}
                  options={[
                    {
                      label: 'Chance simples',
                      value: 1,
                      price: 15,
                    },
                    {
                      label: 'Chance dupla',
                      value: 2,
                      price: 25,
                    },
                    {
                      label: 'Chance tripla',
                      value: 1,
                      price: 30,
                    },
                  ]}
                  onChange={() => {
                    console.log('');
                  }}
                  defaultValue={{
                    label: 'Chance simples',
                    value: 1,
                    price: 15,
                  }}
                />
              )}
            </SelectsContainer>

            <OptionsContainer>
              <OptionsLabel>Escolha uma opção</OptionsLabel>
              <OptionButton
                type="button"
                onClick={handleQuickPurchase}
                disabled={isBuying || disablePurchase}
              >
                <LeftButtonContent>
                  <BsFillLightningChargeFill />
                  Compra rápida
                </LeftButtonContent>
                <ButtonArrow>
                  <FaChevronRight />
                </ButtonArrow>
              </OptionButton>
              <OptionButton
                disabled={disablePurchase}
                onClick={handleChooseTitle}
              >
                <LeftButtonContent>
                  <PiShoppingCartSimpleFill />
                  Escolher meu título
                </LeftButtonContent>
                <ButtonArrow>
                  <FaChevronRight />
                </ButtonArrow>
              </OptionButton>
            </OptionsContainer>
          </PurchaseColumn>
          <ContestImage src={getDrawImage(currentDraw)} />
        </TopSection>
        <HomeFooter />
      </PageContent>
    </Layout>
  );
};

export default Purchase;
