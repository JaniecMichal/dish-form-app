import styled from 'styled-components';
import { Field } from 'redux-form';

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

export const StyledField = styled(Field)`
  width: 400px;
  padding: 10px 20px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
`;
