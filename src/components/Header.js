import React from 'react';
import Load from '../pages/Load';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: '',
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = async () => {
    const data = await getUser();
    this.setState({ userData: data.name });
  }

  render() {
    const { userData } = this.state;
    return (
      <header data-testid="header-component">

        { userData === '' ? <Load />
          : (
            <p data-testid="header-user-name">{ userData }</p>)}
      </header>
    );
  }
}

export default Header;
