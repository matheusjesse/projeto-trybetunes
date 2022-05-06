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
    padding: 0px 30px 0px 30px;
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
    display: flex;
    align-items: center;
    height:50px;
    text-decoration: none;
    color: var(--dark);
    font-size: 30px;
    font-family: 'Ubuntu Mono', monospace;
  }

  a:hover {
    border-bottom: 2px solid var(--blue);
  }

  .user-data {
    font-size: 35px;
    color: var(--white);
    width: 250px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--white);
    border-radius: 30px;
  }

  .logo-image {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 38px;
  }
  
  .logo-image img {
    width: 85px;
    background-color: var(--white);
    border: 3px solid var(--dark-blue);
    border-radius: 50%;
    padding: 5px 0px 0px 7px;
    margin-right: 24px;
  }

`;

export default HeaderContainer;
