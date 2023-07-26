import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
`;

export const TopSection = styled.section`
  width: 100%;
  padding: 1.125rem 1.25rem 0.875rem;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;

  display: flex;
  align-items: center;
`;

export const TopSectionLogo = styled.img`
  margin-right: 0.75rem;

  width: 3.75rem;
  height: 3.75rem;

  object-fit: cover;
`;

export const TopSectionTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #04091c;
`;

export const TopSectionDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #04091c;
`;

export const BottomSection = styled.section`
  margin-top: 2rem;

  padding-top: 1.25rem;

  border-top: 1px solid #b2b4c9;

  display: flex;
  gap: 1.875rem;
`;

export const CompanyColumn = styled.div`
  min-width: fit-content;

  display: flex;
  flex-direction: column;
`;

export const CompanyName = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #1d1f2b;
`;

export const CompanyLogo = styled.img`
  margin-top: 1rem;

  width: 18.25rem;
  height: 6.75rem;
  object-fit: cover;
  border-radius: 20px;
`;

export const TermsColumn = styled.p`
  flex: 1;
  font-size: 0.75rem;
  line-height: 1.4375rem;
  color: #1d1f2b;
`;
