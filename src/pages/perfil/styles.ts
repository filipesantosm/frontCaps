import styled from 'styled-components';

export const PageContent = styled.div`
  width: 90%;
  max-width: 68.75rem;
  margin: 1.875rem auto 2.5rem;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;

  padding: 1.875rem 2rem 2.5rem 2.5rem;
`;

export const ProfileContainer = styled.section`
  margin-top: 1.875rem;

  width: 100%;
  max-width: 50rem;

  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const VerticalSeparator = styled.div`
  width: 1px;
  background: ${({ theme }) => theme.colors.grayb9};
`;

export const Column = styled.article`
  width: 100%;
  max-width: 18.4375rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .profile-field {
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

  @media (max-width: 600px) {
    max-width: unset;
  }
`;

export const ColumnTitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const DeleteAccountButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.white};

  margin-top: 3.75rem;

  padding: 0.5rem 1rem;
  border-radius: 5px;

  color: ${({ theme }) => theme.colors.error};
  font-size: 1rem;
  font-weight: 600;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.95);
  }
`;
