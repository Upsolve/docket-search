import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  ul {
    list-style-type: none;
  }
  ul, ol {
    padding: 0;
  }
`;

export default GlobalStyle;
