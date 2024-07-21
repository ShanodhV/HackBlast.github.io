import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #0f0f0f;
    color: #e0e0e0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyles;
