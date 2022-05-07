import styled from 'styled-components';

const MusicCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid black;
    Width: 380px;
    height: 120px;
    margin: 10px;
    padding-left: 8px;
    border-radius: 10px;
    background: var(--white);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    border: 1px solid var(--white);

    p {
        font-size: 1.5em;
        color: var(--dark);
        margin-left: 8px;
    }

    label{
        display: flex;
        align-items: center;
        color: var(--dark);
        margin-left: 8px;
    }

    input {
        margin-left: 4px;
    }
    

`;

export default MusicCardContainer;
