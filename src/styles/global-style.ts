import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html,
  body {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-size: 1rem;
  }

  body {
    height: 100vh;
    background-color: #ffffff;
    font-family: "Open Sans", sans-serif;
    color: #212529;
  }

  p,
  label {
    line-height: 1.5em;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h1, h2 {
    margin: 0;
  }  

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  * {
    box-sizing: border-box;
    text-decoration: none;
  }
`;

export const AppStyled = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 768px;
  height: 100%;
`;
