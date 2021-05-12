import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
        html {
        box-sizing: border-box
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
    } 
      body {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
        background-color:${({ theme }) => theme.colors.mainBackground};
        color: ${({ theme }) => theme.colors.mainText};
        padding:20px;
    }
`;
