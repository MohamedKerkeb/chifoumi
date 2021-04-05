import { createGlobalStyle } from 'styled-components';

/***
 * Color: #05386B
 * ColorSecondary : #EDF5E1
 * GreenFonce :  #379683
 * Background: #5CDB95
 * BackgroundLight: #8EE4AF
 */

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #5CDB95;
    color: #05386B;
    font-family: 'Major Mono Display', monospace;
    width: 100%;
    height: 100%;
  }

  h1 {
    font-family: 'Major Mono Display', monospace;
  }

`;

export { GlobalStyle };
