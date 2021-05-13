import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 800px;
  height: 600px;
  max-width: 100%;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  font-size: 18px;
`;
