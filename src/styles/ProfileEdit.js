import styled from 'styled-components';

export const PerfilEditContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    .edit-card {
        padding-top: 50px;
        width: 349px;
        height: 450px;
        background: var(--white);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.6px);
        -webkit-backdrop-filter: blur(7.6px);
        border: 10px solid var(--white);
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        flex-flow: column wrap;
        justify-content: flex-start;
    }

    label {        
        font-size: 20px;
        height: 80px;
        display: flex;
        flex-flow: column wrap;
        color: var(--dark);  
        font-family: 'Courier New';        
    }    

    input[type=text] {
        height:32px;
        border-radius: 8px;
        border: 1px solid var(--dark);
        padding-left: 12px;    
        font-size: 16px;
        background-color: var(--white);
        font-family: 'Courier New';
    }

    input[type=text]:focus {
        outline: none;
        border: 1px solid var(--blue);
    }

    input[type=button] {
        height:40px;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 114px;
        background-color: var(--blue);
        color: var(--white);
        font-size: 20px;
        border: none;
        border-radius: 8px;
        
    }

    input[type=button]:disabled {
        background-color: var(--dark);
        color: var(--white);
    }

    

`;

export default PerfilEditContainer;
