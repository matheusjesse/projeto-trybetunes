import styled from 'styled-components';

const AlbumCardContainer = styled.div`
  width:320px;
  height: 220px;
  background-color: var(--white);
  margin-bottom: 5px;
  border-radius: 10px;
  display:flex;
  align-items: center;
  justify-content: center;  

  a {
    width: 320px;
    height: 130px;
    display:flex;
    text-decoration: none;
    color: var(--dark);
    align-items: center;
    border: 1px solid var(--dark);
    border-radius: 10px;
  }

  img {
    width: 100px;
    heigth: 100px;
    border-radius: 50%;
    margin: 0px 5px 0px 5px;
  }

  h2 {
    font-size: 1em;
  }
`;

export default AlbumCardContainer;
