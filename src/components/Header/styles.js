import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100vw;
  height: 181px ;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .header-top{
    height: 110px;
    background-color: var(--dark);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .links-list {
    height: 71px ;
    background-color: var(--white);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.1px solid  var(--gray);
  }

  a {
    text-decoration: none;
    color: var(--dark);
    font-size: 30px;
    font-family: 'Ubuntu Mono', monospace;
  }

`;

export default HeaderContainer;
