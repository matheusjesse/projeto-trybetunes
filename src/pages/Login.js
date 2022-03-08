import React from 'react';
import { createUser } from '../services/userAPI';
// import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendUser = this.sendUser.bind(this);
    this.state = {
      name: '',
      buttonDisabled: true,
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
    createUser({ name });
    console.log(name);
  }

  render() {
    const { name, buttonDisabled } = this.state;

    return (
      <div data-testid="page-login">
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            data-testid="login-name-input"
            onChange={ this.handleInputChange }
            value={ name }
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
      </div>
    );
  }
}

export default Login;
