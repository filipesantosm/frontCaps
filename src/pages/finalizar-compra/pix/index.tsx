import CartItemsList from '@/components/CartItemsList/CartItemsList';
import HelpFooter from '@/components/HelpFooter/HelpFooter';
import Layout from '@/components/Layout/Layout';
import Loading from '@/components/Loading/Loading';
import PageTitle from '@/components/PageTitle/PageTitle';
import PixSection from '@/components/PixSection/PixSection';
import { useCart } from '@/hooks/useCart';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import { addMinutes } from 'date-fns';
import { useState } from 'react';
import {
  ContinueButton,
  PageContent,
  PixPaymentContainer,
  PixPaymentContent,
  PixPaymentDescription,
  PixPaymentTitle,
  TopSection,
} from './styles';

const PixPayment = () => {
  const [isPaying, setIsPaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedDrawPromo } = useCurrentDraw();

  const { cartItems } = useCart();

  const handlePay = async () => {
    if (!cartItems.length) {
      handleError('Seu carrinho está vazio!');
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await api.post('/paymentTitle', {
        data: {
          payment_type: {
            id: 1,
          },
          origin: 'Web',
          titles: cartItems.map(cartItem => ({
            id: cartItem.id,
          })),
          promo: selectedDrawPromo?.value,
        },
      });

      // TODO: Terminar

      setIsPaying(true);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isPaying) {
    return (
      <Layout>
        <PageContent>
          <PageTitle>Finalizar Compra</PageTitle>
          <PixSection finalDate={addMinutes(new Date(), 30)} />
          <HelpFooter />
        </PageContent>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageContent>
        <PageTitle>Finalizar Compra</PageTitle>
        <TopSection>
          <CartItemsList />

          <PixPaymentContainer>
            <PixPaymentContent>
              <PixPaymentTitle>Pagar por PIX</PixPaymentTitle>
              <PixPaymentDescription>
                Ao confirmar o pagamento via PIX, será gerado um QR Code. Você
                poderá ler através do seu aplicativo do banco ou utilizar o PIX
                Copia e Cola. Basta copiar o código referente ao QR Code e
                informar esse código dentro da área PIX do aplicativo do seu
                banco
              </PixPaymentDescription>
              <ContinueButton
                type="button"
                onClick={handlePay}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loading iconColor="white" iconFontSize="1.5rem" />
                ) : (
                  'Continuar'
                )}
              </ContinueButton>
            </PixPaymentContent>
          </PixPaymentContainer>
        </TopSection>
        <HelpFooter />
      </PageContent>
    </Layout>
  );
};

export default PixPayment;
