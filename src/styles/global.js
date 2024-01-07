import { createGlobalStyle } from "styled-components";

import "react-circular-progressbar/dist/styles.css";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --white: #f5f5f5;
    --black: #0c0d0d;
    --primary: #1E90FF;
    --secondary: #6495ED;
    --test: #00BFFF;
  }

  body {
    background: #e5e7eb;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'PT Serif', serif;
    font-size: 1rem;
  }

  h1,h2,h3,h4,h5 {
    font-family: 'Roboto Mono';
    font-weight: 700;

  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`;
