import Layout from '@/components/Layout/Layout';
import { useState } from 'react';
import CartItemsList from '@/components/CartItemsList/CartItemsList';
import HelpFooter from '@/components/HelpFooter/HelpFooter';
import PageTitle from '@/components/PageTitle/PageTitle';
import PixSection from '@/components/PixSection/PixSection';
import { addMinutes } from 'date-fns';
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
              <ContinueButton type="button" onClick={() => setIsPaying(true)}>
                Continuar
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
