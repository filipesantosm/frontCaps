import HomeFooter from '@/components/HomeFooter/HomeFooter';
import Layout from '@/components/Layout/Layout';
import PurchaseSelect from '@/components/PurchaseSelect/PurchaseSelect';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { useRouter } from 'next/router';
import {
  ButtonArrow,
  ContestImage,
  LeftButtonContent,
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

  const isDoubleChance = !!router.query['dupla-chance'];

  return (
    <Layout>
      <PageContent>
        <TopSection>
          <PurchaseColumn>
            <Title>Comprar</Title>

            <SelectsContainer>
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
              <OptionLink href="/finalizar-compra">
                <LeftButtonContent>
                  <BsFillLightningChargeFill />
                  Compra rápida
                </LeftButtonContent>
                <ButtonArrow>
                  <FaChevronRight />
                </ButtonArrow>
              </OptionLink>
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
          <ContestImage src="/home-hero.png" />
        </TopSection>
        <HomeFooter />
      </PageContent>
    </Layout>
  );
};

export default Purchase;
