import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    min-width: 28rem;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.4rem;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.bg.primary};

  }

  p {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
`;

export default GlobalStyle;
