import styled from 'styled-components';

const AlbumContainer = styled.div`    
    background-color: var(--white);
    width: 100vw;  
    min-height: 100vh;
    background-color: var(--white);
    display: flex;
    justify-content: flex-start;

    .musics-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-envely;
        align-items: center;
        margin-top: 40px;
    }

    h1, h2 {
        margin-left: 20px;
        color: var(--dark)
    }

    h1 {
        font-size: 3em;
    }


`;

export default AlbumContainer;
