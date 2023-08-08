import HomeFooter from '@/components/HomeFooter/HomeFooter';
import Layout from '@/components/Layout/Layout';
import PurchaseSelect from '@/components/PurchaseSelect/PurchaseSelect';
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
import { useAuth } from '@/hooks/useAuth';
import {
  ButtonArrow,
  ContestImage,
  LeftButtonContent,
  OptionButton,
  OptionLink,
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
    setSelectedDrawOption,
    selectedDrawOption,
    currentDraw,
  } = useCurrentDraw();
  const { setCartItems } = useCart();
  const [isBuying, setIsBuying] = useState(false);

  const isDoubleChance = !!router.query['dupla-chance'];

  const handleQuickPurchase = async () => {
    if (!isAuthenticated) {
      router.push({
        pathname: '',
        query: {
          modal: 'login',
        },
      });
      return;
    }

    setIsBuying(true);

    try {
      const { data } = await api.get<ITitle[]>('/getSuggestedTitle', {
        params: {
          id: currentDraw?.id,
        },
      });

      const suggestedCartItems = data.map(titleToCartItem);

      setCartItems(
        suggestedCartItems.slice(0, selectedDrawOption?.quantity || 1),
      );

      router.push('/finalizar-compra');
    } catch (error) {
      handleError(error);
    } finally {
      setIsBuying(false);
    }
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
                  setSelectedDrawOption(option as PromoOption);
                }}
                value={selectedDrawOption}
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
                disabled={isBuying}
              >
                <LeftButtonContent>
                  <BsFillLightningChargeFill />
                  Compra rápida
                </LeftButtonContent>
                <ButtonArrow>
                  <FaChevronRight />
                </ButtonArrow>
              </OptionButton>
              <OptionLink href="/escolher-titulo">
                <LeftButtonContent>
                  <PiShoppingCartSimpleFill />
                  Escolher meu título
                </LeftButtonContent>
                <ButtonArrow>
                  <FaChevronRight />
                </ButtonArrow>
              </OptionLink>
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
