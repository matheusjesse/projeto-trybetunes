import styled from 'styled-components';

const AlbumCardContainer = styled.div`
  width:320px;
  height: 100%;
  margin: 12px 12px 0px 0px;
  border-radius: 10px;
  display:flex;
  align-items: center;
  justify-content: center;

  a {
    width: 320px;
    min-height: 130px;
    max-height: 400px;
    display:flex;
    text-decoration: none;
    color: var(--dark);
    align-items: center;
    border-radius: 10px;
    background: var(--white);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    border: 1px solid var(--white);
  }

  a:hover {
    border: 1px solid var(--blue);
  }

  img {
    width: 100px;
    heigth: 100px;
    border-radius: 50%;
    margin: 0px 5px 0px 5px;
  }

  h2 {
    font-size: 1em;
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
  }

  @media only screen and (max-width: 500px) { 
    width: 360px;
    a {
      width: 360px;  
    }
    
  }
`;

export default AlbumCardContainer;
