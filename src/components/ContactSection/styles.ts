import styled from 'styled-components';

export const ContactTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const ContactContainer = styled.section`
  margin-top: 1.25rem;

  width: 100%;

  display: flex;
  gap: 1.75rem;
`;

export const ContactColumn = styled.div`
  width: 100%;
  max-width: 19.375rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ContactCard = styled.article`
  width: 100%;
  padding: 1.25rem;
  padding-bottom: 1.75rem;
  border-radius: 0.625rem;
  border: 3px solid #e4eef7;

  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const CardText = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const ContactForm = styled.form`
  margin-top: 1.25rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.375rem;

  .contact-field {
    background: #fafafa;
    padding: 0.375rem 1.25rem 0.4375rem;

    textarea {
      min-height: 7.5rem;
    }

    label {
      font-size: 0.6875rem;
      margin-bottom: 0.125rem;
    }
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  max-width: 18.75rem;

  display: flex;
  flex-direction: column;
  gap: 1.375rem;
`;

export const SubmitButton = styled.button`
  border: none;

  margin-top: 1.25rem;
  min-height: 3.125rem;
  width: 100%;
  max-width: 20rem;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 600;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
