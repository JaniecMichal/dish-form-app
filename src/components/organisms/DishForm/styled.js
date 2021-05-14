import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 800px;
  margin-top: 10%;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin-top: 20px;
  }
`;
