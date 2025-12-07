// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  /* ---------- RESET ---------- */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Vazirmatn", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  /* ---------- BODY ---------- */
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.35s ease, color 0.35s ease;
    overflow-x: hidden;
  }

  /* ---------- LINKS ---------- */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* ---------- HEADINGS ---------- */
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text};
    font-weight: 900;
    line-height: 1.25;
  }

  /* ---------- TEXT SELECTION ---------- */
  ::selection {
    background: ${({ theme }) => theme.primary};
    color: white;
  }

  /* ---------- REVEAL ANIMATION (optional) ---------- */
  [data-reveal] {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity .6s ease, transform .6s ease;
    visibility: hidden;
  }

  [data-reveal].active {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }

`;

export default GlobalStyles;