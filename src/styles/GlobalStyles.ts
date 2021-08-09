import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    border: 0;
    background: none;
    font-family: 'Roboto', --apple-system, system-ui, sans-serif;
  }

  ul {
    list-style: none;
  }
`;

export { GlobalStyles };
