import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Load from './Load';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const data = await getUser();
    this.setState({
      userInfo: data,
      loading: false,
    });
  }

  render() {
    const { userInfo, loading } = this.state;
    const { name, email, image, description } = userInfo;
    return (
      <>
        <Header />
        {
          loading ? <Load />
            : (
              <>
                <Link to="/profile/edit">Editar perfil</Link>
                <div data-testid="page-profile">
                  <img src={ image } data-testid="profile-image" alt={ name } />
                  <h1>{ name }</h1>
                  <h2>{ email }</h2>
                  <p>{ description }</p>
                </div>
              </>
            )
        }
      </>
    );
  }
}

export default Profile;
