import CartItemsList from '@/components/CartItemsList/CartItemsList';
import CreditCardForm from '@/components/CreditCardForm/CreditCardForm';
import HelpFooter from '@/components/HelpFooter/HelpFooter';
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import { useState } from 'react';
import CreditCardList from '@/components/CreditCardList/CreditCardList';
import SuccessModal from '@/components/SuccessModal/SuccessModal';
import PaymentErrorModal from '@/components/PaymentErrorModal/PaymentErrorModal';
import {
  CardPaymentContainer,
  CardPaymentContent,
  CardPaymentDescription,
  CardPaymentTitle,
  PageContent,
  TopSection,
} from './styles';

const CreditCardPayment = () => {
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
                  onSuccess={() => setShowForm(false)}
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
        />
      )}
      {showErrorModal && (
        <PaymentErrorModal
          onChooseOtherMethod={() => setShowErrorModal(false)}
          onClose={() => setShowErrorModal(false)}
        />
      )}
    </Layout>
  );
};

export default CreditCardPayment;
