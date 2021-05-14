import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 800px;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  font-size: 18px;
`;
