import HomeFooter from '@/components/HomeFooter/HomeFooter';
import Layout from '@/components/Layout/Layout';
import React from 'react';
import ShadowSelect from '@/components/ShadowSelect/ShadowSelect';
import { FaChevronRight } from 'react-icons/fa';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import PurchaseSelect from '@/components/PurchaseSelect/PurchaseSelect';
import {
  ButtonArrow,
  ContestImage,
  LeftButtonContent,
  OptionButton,
  OptionsContainer,
  OptionsLabel,
  PageContent,
  PurchaseColumn,
  Title,
  TopSection,
} from './styles';

const Purchase = () => {
  return (
    <Layout>
      <PageContent>
        <TopSection>
          <PurchaseColumn>
            <Title>Comprar</Title>

            <PurchaseSelect
              isSearchable={false}
              options={[
                {
                  label: '1 Título | $ 15,00',
                  value: 1,
                  price: 15,
                },
              ]}
              onChange={() => {
                console.log('');
              }}
              defaultValue={{
                label: '1 Título | R$ 15,00',
                value: 1,
                price: 15,
              }}
            />

            <OptionsContainer>
              <OptionsLabel>Escolha uma opção</OptionsLabel>
              <OptionButton>
                <LeftButtonContent>
                  <BsFillLightningChargeFill />
                  Compra rápida
                </LeftButtonContent>
                <ButtonArrow>
                  <FaChevronRight />
                </ButtonArrow>
              </OptionButton>
              <OptionButton>
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
          <ContestImage src="/home-hero.png" />
        </TopSection>
        <HomeFooter />
      </PageContent>
    </Layout>
  );
};

export default Purchase;
