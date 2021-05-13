import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.teal};
  border: 2px solid ${({ theme }) => theme.colors.scoripion};
  box-shadow: 8px 8px 15px 2px rgba(0, 0, 0, 0.21);
  padding: 10px 30px;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
