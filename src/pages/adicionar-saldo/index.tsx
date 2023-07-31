import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import HelpFooter from '@/components/HelpFooter/HelpFooter';
import { FaCopy } from 'react-icons/fa';
import { useState } from 'react';
import {
  AmountItem,
  AmountsList,
  BarcodeImage,
  BilletCode,
  Checkbox,
  ChooseAmountContainer,
  ChooseAmountContent,
  ChooseAmountTitle,
  CopyCodeButton,
  InstructionIcon,
  InstructionIconWrapper,
  InstructionItem,
  InstructionsList,
  PageContent,
  PaymentInstructionsContainer,
  SubmitButton,
  TopSection,
  ValidDate,
} from './styles';

const AddBalance = () => {
  const [hasGenerated, setHasGenerated] = useState(false);
  return (
    <Layout>
      <PageContent>
        <PageTitle>Finalizar Compra</PageTitle>
        <TopSection>
          <ChooseAmountContainer>
            <ChooseAmountContent>
              <ChooseAmountTitle>Adicionar saldo</ChooseAmountTitle>
              <ValidDate>Vencimento 18/04/2023</ValidDate>
              <AmountsList>
                <AmountItem>
                  <Checkbox type="radio" name="amount" />
                  R$ 30,00
                </AmountItem>
                <AmountItem>
                  <Checkbox type="radio" name="amount" />
                  R$ 60,00
                </AmountItem>
                <AmountItem>
                  <Checkbox type="radio" name="amount" />
                  R$ 90,00
                </AmountItem>
                <AmountItem>
                  <Checkbox type="radio" name="amount" />
                  R$ 120,00
                </AmountItem>
              </AmountsList>
              <SubmitButton type="button" onClick={() => setHasGenerated(true)}>
                Gerar boleto
              </SubmitButton>
            </ChooseAmountContent>
          </ChooseAmountContainer>
          {hasGenerated && (
            <PaymentInstructionsContainer>
              <InstructionsList>
                <InstructionItem>
                  <InstructionIconWrapper>
                    <InstructionIcon src="/add-balance/checkmark.svg" />
                  </InstructionIconWrapper>
                  O banco enviará a confirmação do pagamento em até 4 dias
                  úteis. Após essa confirmação o aplicativo será liberado para
                  uso.
                </InstructionItem>
                <InstructionItem>
                  <InstructionIconWrapper>
                    <InstructionIcon src="/add-balance/money.svg" />
                  </InstructionIconWrapper>
                  Para pagar o Boleto pelo Internet Banking do seu banco, digite
                  ou copie o código de barras.
                </InstructionItem>
                <InstructionItem>
                  <InstructionIconWrapper>
                    <InstructionIcon src="/add-balance/calendar.svg" />
                  </InstructionIconWrapper>
                  Se atente ao prazo de vencimento do boleto, o mesmo pode
                  variar de acordo com o horário da compra.
                </InstructionItem>
              </InstructionsList>
              <InstructionItem>
                <BarcodeImage src="/add-balance/barcode.svg" />
                <BilletCode>
                  00020.101021.226770. 014456.456123.564884.6654555555
                </BilletCode>
              </InstructionItem>
              <CopyCodeButton>
                <FaCopy />
                Copiar código
              </CopyCodeButton>
            </PaymentInstructionsContainer>
          )}
        </TopSection>
        <HelpFooter />
      </PageContent>
    </Layout>
  );
};

export default AddBalance;
