import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import backgroundImage from 'assets/images/emptyBoard.jpg';

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
        width:100vw;
        display:flex;
        justify-content:center;
        align-items:center;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
        background-image:url(${backgroundImage});
        background-repeat:no-repeat;
        background-size: cover;
        color: ${({ theme }) => theme.colors.mainText};

        @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        padding: 20px;
        }
    }
`;
