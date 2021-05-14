import styled from 'styled-components';
import { Field } from 'redux-form';

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.normal};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.small};
    margin-bottom: 5px;
  }
`;

export const StyledField = styled(Field)`
  width: 400px;
  padding: 10px 20px;
  border: 2px solid ${({ theme }) => theme.colors.grey};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 300px;
    padding: 10px 10px;
  }

  @media (max-width: ${({ theme }) => theme.media.ekstraMobile}px) {
    width: 200px;
    padding: 10px 10px;
  }
`;
