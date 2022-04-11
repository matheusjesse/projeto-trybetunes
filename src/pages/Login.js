import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Load from './Load';
import { ContainerLogin } from '../styles/Login';
import HeadFone from '../assets/fone2.svg';
// import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendUser = this.sendUser.bind(this);
    this.state = {
      name: '',
      buttonDisabled: true,
      loading: false,
      redirect: false,
    };
  }

  handleInputChange({ target }) {
    const { value } = target;
    this.setState({ name: value }, () => this.validate());
  }

  validate = () => {
    const { name } = this.state;
    const minlength = 3;
    const validation = name.length >= minlength;
    if (validation) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  }

  sendUser() {
    const { name } = this.state;
    this.setState({
      loading: true,
    }, async () => {
      await createUser({ name });
      this.setState({
        loading: false,
        redirect: true,
      });
    });
  }

  render() {
    const { name, buttonDisabled, loading, redirect } = this.state;

    return (
      <ContainerLogin>
        <div data-testid="page-login">
          {
            loading ? <Load /> : (
              <div className="login-container">
                <img
                  src={ HeadFone }
                  alt="Blue Head-Set"
                />
                <h1>TrybeTunes</h1>
                <form>
                  <label htmlFor="name">
                    <input
                      type="text"
                      id="name"
                      data-testid="login-name-input"
                      onChange={ this.handleInputChange }
                      value={ name }
                      autoComplete="off"
                      placeholder="Nome..."
                    />
                  </label>
                  <button
                    type="button"
                    data-testid="login-submit-button"
                    onClick={ this.sendUser }
                    disabled={ buttonDisabled }
                  >
                    Entrar
                  </button>
                </form>
              </div>
            )
          }
          {
            redirect ? <Redirect to="/search" /> : ''
          }
        </div>
      </ContainerLogin>
    );
  }
}

export default Login;
