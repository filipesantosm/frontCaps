import CartItemsList from '@/components/CartItemsList/CartItemsList';
import CreditCardForm from '@/components/CreditCardForm/CreditCardForm';
import CreditCardList from '@/components/CreditCardList/CreditCardList';
import HelpFooter from '@/components/HelpFooter/HelpFooter';
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import PaymentErrorModal from '@/components/PaymentErrorModal/PaymentErrorModal';
import SuccessModal from '@/components/SuccessModal/SuccessModal';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  CardPaymentContainer,
  CardPaymentContent,
  CardPaymentDescription,
  CardPaymentTitle,
  PageContent,
  TopSection,
} from './styles';

const CreditCardPayment = () => {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const [showForm, setShowForm] = useState(false);

  return (
    <Layout>
      <PageContent>
        <PageTitle>Finalizar Compra</PageTitle>
        <TopSection>
          <CartItemsList />

          <CardPaymentContainer>
            <CardPaymentContent>
              <CardPaymentTitle>
                Pagamento por Cartão de Crédito
              </CardPaymentTitle>
              <CardPaymentDescription>
                Preencha os dados do cartão de crédito para finalizar a compra.
              </CardPaymentDescription>

              {showForm ? (
                <CreditCardForm
                  onError={() => setShowErrorModal(true)}
                  onSuccess={() => {
                    setShowSuccessModal(true);
                  }}
                />
              ) : (
                <CreditCardList
                  onClickAddCard={() => setShowForm(true)}
                  onError={() => setShowErrorModal(true)}
                  onSuccess={() => setShowSuccessModal(true)}
                />
              )}
            </CardPaymentContent>
          </CardPaymentContainer>
        </TopSection>
        <HelpFooter />
      </PageContent>
      {showSuccessModal && (
        <SuccessModal
          message="O pagamento foi realizado"
          onClose={() => setShowSuccessModal(false)}
          onContinue={() => router.push('/extrato')}
        />
      )}
      {showErrorModal && (
        <PaymentErrorModal
          onChooseOtherMethod={() => {
            setShowErrorModal(false);
            router.push('/finalizar-compra');
          }}
          onClose={() => setShowErrorModal(false)}
        />
      )}
    </Layout>
  );
};

export default CreditCardPayment;
