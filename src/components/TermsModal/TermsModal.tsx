import handleError from '@/utils/handleToast';
import { useEffect, useState } from 'react';
import api from '@/services/api';
import { PaginatedResponse } from '@/interfaces/Paginated';
import { ITerm } from '@/interfaces/Terms';
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  Container,
  Content,
  ModalTitle,
  SubmitButton,
  TermsContainer,
  TermsText,
} from './styles';

interface Props {
  onAccept: (termId: number) => void;
}

const TermsModal = ({ onAccept }: Props) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [terms, setTerms] = useState<ITerm>();

  const onSubmit = () => {
    if (!termsAccepted) {
      handleError('Aceite os termos para continuar');
      return;
    }

    if (terms) {
      onAccept(terms.id);
    }
  };

  const getTerms = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<ITerm>>('/term-uses', {
        params: {
          'filters[type][$eq]': 'Termo Uso',
          'filters[active][$eq]': true,
        },
      });

      setTerms(data?.data?.[0]);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getTerms();
  }, []);

  return (
    <Container>
      <Content>
        <ModalTitle>
          Os termos de uso foram atualizados, aceite-os para continuar
          utilizando a plataforma
        </ModalTitle>
        <TermsContainer>
          <TermsText>{terms?.attributes?.description}</TermsText>
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={termsAccepted}
              onChange={e => {
                setTermsAccepted(e.target.checked);
              }}
            />
            <CheckboxLabel>
              Li e estou de acordo com os
              <strong> Termos de uso</strong>
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
      </Content>
    </Container>
  );
};

export default TermsModal;
