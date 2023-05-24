import { createGlobalStyle } from "styled-components";

import Font8 from "../fonts/DNFBitBitTTF.ttf";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
  }

  button{
    font-family: 'Poppins';
  }

  @font-face {
    font-family: "MyFont";
    src: local("MyFont"), url(${Font8}) format("truetype");
  }

  .bitfont{
    font-family: "MyFont"
  } 

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  ul,
  ol {
    list-style: none;
  }

  img {
   max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  body, input, button {
    font: 16px serif;
  }

  @media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
