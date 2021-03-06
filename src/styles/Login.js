import styled from 'styled-components';

export const ContainerLogin = styled.div`
  
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  text-align: center;    
  flex-direction: column;
    
    
    & button:active {
    box-shadow: none;
    }

  .login-container {
    padding-top: 50px;
    width: 349px;
    height: 434px;
    border-radius: 22px;
    background-color: var(--white);      
    box-shadow: 3px 3px 5px 6px #ccc;
  }
  

  form{    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    
  }

  img {    
    width: 140px;
    height: 140px;
  }

  h1 {
    font-family: 'Ubuntu Mono', monospace;
    color: var(--dark);
    margin: 0px 0px 30px 0px
  }

  input {
    width: 316px;
    height: 45px;
    border-radius: 4px;
    border: 0.1px solid var(--gray);
    //box-shadow: 0.5px 0.5px #888888;
    background-color: var(--white);
    font-size: 25px;
    padding-left: 15px;
    font-family: -apple-system, BlinkMacSystemFont,
'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--dark);

    &:focus {
      outline: none;
      border: 1px solid var(--blue);      
    }    
  }  

  input::placeholder {
    color: var(--gray);
    opacity: 50%;
    font-size: 25px;
  }

  input:focus::placeholder {
    color: var(--white);
  }

  button {
    background-color: var(--blue);
    margin: 12px;
    width: 189px;
    height: 46px;
    border:none;
    border-radius: 10px;
    color: var(--white);
    font-size: 30px;
  }

  button:disabled {
    border: none;
    background-color: var(--dark);
  }

  @media only screen and (max-width: 500px) {

    .login-container {
      padding-top: 20px;
      width: 349px;
      height: 434px;
      border-radius: 22px;
      background-color: var(--white); 
      box-shadow: none;
    }

    button {
      margin-top: 16px; 
      border-radius: 6px;
      width: 316px
    }

  }
  
`;

export default ContainerLogin;
