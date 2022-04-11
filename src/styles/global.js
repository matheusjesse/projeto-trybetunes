import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 :root {
   --blue: #00638a;
   --dark-blue: #0C4E6A;
   --dark: #231c1c;
   --gray: #8f8888;
   --white: #faf4f4;

 }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width: 100%;
    height: 100vh;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  
`;

export default GlobalStyle;
