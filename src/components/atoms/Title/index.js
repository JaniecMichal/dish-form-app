import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 700px;
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.colors.mainText};
  padding-bottom: 5px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.scoripion};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.normal};
  }
`;
