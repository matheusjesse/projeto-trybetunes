import React from 'react';
import { Link } from 'react-router-dom';
import Load from '../../pages/Load';
import { getUser } from '../../services/userAPI';
import HeaderContainer from './styles';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = async () => {
    const data = await getUser();
    this.setState({
      userData: data.name,
      loading: false,
    });
  }

  render() {
    const { userData, loading } = this.state;
    return (
      <div>
        {loading
          ? <Load />
          : (
            <HeaderContainer data-testid="header-component">
              <div className="header-top">
                <div className="logo-image">
                  <p>LOGO</p>
                </div>
                <div className="user-data">
                  <p data-testid="header-user-name">{ userData }</p>
                </div>
              </div>
              <div className="header-botton">
                <div className="links-list">
                  <Link data-testid="link-to-search" to="/search">Search</Link>
                  <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
                  <Link data-testid="link-to-profile" to="/profile">Profile</Link>
                </div>
              </div>
            </HeaderContainer>
          )}
      </div>

    );
  }
}

export default Header;
