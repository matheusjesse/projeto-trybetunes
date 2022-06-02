import styled from 'styled-components';

export const ContainerSearch = styled.div`
  background-color: var(--white);
  width: 100vw;  
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column; 
  
  input {
    width: 400px;
    height: 48px;
    margin: 15px 10px 15px 15px;
    border: 2px solid var(--dark);
    border-radius: 10px;
    background-color: var(--gray);
    font-size: 25px;
    color: var(--white);
    padding: 0px 10px 0px 10px;
  }

  input:hover {    
    border: 2px solid var(--blue);    
  }

  input:focus {
    outline: none;
  }

  button {
    width: 170px;
    height: 48px;
    border: none;
    margin: 15px 15px 15px 0px;
    border-radius: 10px;
    background-color: var(--blue);
    color: var(--white);
    font-size: 30px;
  }

  div.input-section {
    height: 100px;
    display: flex;
    align-items: center;    
  }

  .card-container{
    width: 100%;    
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-envely;
    margin: 30px;
  }
  
  @media only screen and (max-width: 500px) { 

      div.input-section { 
        flex-wrap: wrap;
        margin: 0px 8px 0px 8px;
      }

      input {
        width: 246px;
        height: 40px;
        margin: 15px 10px 15px 0px;
      }

      button {
        width: 124px;
        height: 40px;
      }
    }  

`;

export default ContainerSearch;
