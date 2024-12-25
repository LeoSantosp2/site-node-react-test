import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    width: 100%;
    height: 100vh;
  }

  html{
    font-size: 62.5%;
  }
`;
