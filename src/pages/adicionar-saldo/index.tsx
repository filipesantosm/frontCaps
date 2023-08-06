import HelpFooter from '@/components/HelpFooter/HelpFooter';
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import api from '@/services/api';
import handleError, { handleSuccess } from '@/utils/handleToast';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaCopy } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { format, parseISO } from 'date-fns';
import { PaginatedResponse } from '@/interfaces/Paginated';
import { ICreditSaleValue } from '@/interfaces/CreditSales';
import { formatCurrency } from '@/utils/formatCurrency';
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
  LoadingIcon,
  LoadingWrapper,
  PageContent,
  PaymentInstructionsContainer,
  SubmitButton,
  TopSection,
  ValidDate,
} from './styles';

interface AddBalanceForm {
  value: string;
}

const AddBalance = () => {
  const router = useRouter();
  const [hasGenerated, setHasGenerated] = useState(false);
  const [validDate, setValidDate] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [billetCode, setBilletCode] = useState(
    '00020.101021.226770. 014456.456123.564884.6654555555',
  );
  const [creditValues, setCreditValues] = useState<ICreditSaleValue[]>([]);
  const { register, handleSubmit } = useForm<AddBalanceForm>();

  useEffect(() => {
    getValidDate();
    getCreditValues();
  }, []);

  const getValidDate = async () => {
    try {
      const { data } = await api.get<string>('/getDueDateCredit');

      setValidDate(format(parseISO(data), 'dd/MM/yyyy'));
    } catch (error) {
      handleError(error);
    }
  };

  const getCreditValues = async () => {
    setIsLoading(true);

    try {
      const { data } = await api.get<PaginatedResponse<ICreditSaleValue>>(
        '/user-type-credit-sales',
        {
          params: {
            'filters[active][$eq]': true,
          },
        },
      );

      setCreditValues(data.data);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<AddBalanceForm> = async form => {
    if (!form.value) {
      handleError('Selecione um valor');
      return;
    }

    setIsGenerating(true);

    try {
      const payload = {
        data: {
          value: Number(form.value),
          origin: 'Web',
        },
      };

      const { data } = await api.post('/createCredit', payload);

      // TODO: Setar código do boleto

      setHasGenerated(true);
    } catch (error) {
      handleError(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(billetCode);
    handleSuccess('Código copiado com sucesso!');
  };

  return (
    <Layout>
      <PageContent>
        <PageTitle>Finalizar Compra</PageTitle>
        <TopSection>
          <ChooseAmountContainer>
            <ChooseAmountContent>
              <ChooseAmountTitle>Adicionar saldo</ChooseAmountTitle>
              {validDate && <ValidDate>Vencimento {validDate}</ValidDate>}
              <AmountsList>
                {isLoading && (
                  <LoadingWrapper>
                    <LoadingIcon />
                  </LoadingWrapper>
                )}
                {creditValues.map(creditValue => (
                  <AmountItem key={creditValue.id}>
                    <Checkbox
                      type="radio"
                      value={creditValue.attributes.value.toString()}
                      {...register('value')}
                      disabled={hasGenerated}
                    />
                    {formatCurrency(creditValue.attributes.value)}
                  </AmountItem>
                ))}
              </AmountsList>
              <SubmitButton
                type="button"
                disabled={isGenerating || hasGenerated}
                onClick={handleSubmit(onSubmit)}
              >
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
                <BilletCode>{billetCode}</BilletCode>
              </InstructionItem>
              <CopyCodeButton onClick={handleCopyCode}>
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
