import handleError from '@/utils/handleToast';
import { useEffect, useState } from 'react';
import api from '@/services/api';
import { PaginatedResponse } from '@/interfaces/Paginated';
import { ITerm } from '@/interfaces/Terms';
import { SignUpStepProps } from '../../interfaces';
import { SubmitButton } from '../../styles';
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  TermsContainer,
  TermsText,
} from './styles';

const TermsStep = ({ onNext }: SignUpStepProps) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [terms, setTerms] = useState('');

  const onSubmit = () => {
    if (!termsAccepted) {
      handleError('Aceite os termos para continuar');
      return;
    }

    onNext();
  };

  const getTerms = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<ITerm>>('/term-uses', {
        params: {
          'filters[type][$eq]': 'Termo Uso',
          'filters[active][$eq]': true,
        },
      });

      setTerms(data?.data?.[0]?.attributes?.description || '');
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getTerms();
  }, []);

  return (
    <TermsContainer>
      <TermsText>{terms}</TermsText>

      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          checked={termsAccepted}
          onChange={e => {
            setTermsAccepted(e.target.checked);
          }}
        />
        <CheckboxLabel>
          Li e estou de acordo com as
          <strong> Políticas de Privacidade</strong>
        </CheckboxLabel>
      </CheckboxContainer>

      <SubmitButton
        style={{
          maxWidth: '22.875rem',
          margin: '0 auto',
          marginTop: 'max(5rem, 5vh)',
        }}
        type="button"
        onClick={onSubmit}
      >
        ACEITAR E FINALIZAR
      </SubmitButton>
    </TermsContainer>
  );
};

export default TermsStep;
