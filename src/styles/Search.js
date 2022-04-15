import styled from 'styled-components';

export const ContainerSearch = styled.div`
  background-color: var(--white);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  
  
  input {
    width: 400px;
    height: 48px;
    margin: 15px 10px 15px 15px;
    border: 1px solid var(--blue);
    border-radius: 10px;
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

`;

export default ContainerSearch;
