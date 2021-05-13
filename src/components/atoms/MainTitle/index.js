import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-weight: 700px;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.mainText};
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.scoripion};
`;
