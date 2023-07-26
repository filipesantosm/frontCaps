import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  html {
    @media (min-width: 1600px) {
      font-size: 110%;
    }
    @media (max-width: 1200px) {
      font-size: 93.75%;
    }
    @media (max-width: 1100px) {
      font-size: 75%;
    }
    @media (max-width: 700px) {
      font-size: 60%;
    }
    @media (max-width: 500px) {
      font-size: 50%;
    }
  }

  body {
    background-color: #fff;
    height: 100vh;
    font-family: Poppins, sans-serif;
    text-rendering: optimizeLegibility;
  }

  button, input, textarea {
    font-family: Poppins, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
