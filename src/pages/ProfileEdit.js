import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Load from './Load';
import PerfilEditContainer from '../styles/ProfileEdit';

class ProfileEdit extends React.Component {
  constructor() {
    super();
    this.editProfile = this.editProfile.bind(this);

    this.state = {
      userInfo: {},
      buttonValidate: true,
      loading: false,
      redirect: false,
    };
  }

  async componentDidMount() {
    const data = await getUser();
    this.setState({
      userInfo: data,
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { userInfo } = this.state;

    this.setState({
      userInfo: {
        ...userInfo,
        [name]: value,
      },
    }, () => this.validationButton());
  }

  validationButton = () => {
    const { userInfo } = this.state;
    const { name, email, image, description } = userInfo;
    const validateLength = name.length > 0
      && email.length > 0
      && image.length > 0
      && description.length > 0;
    const regex = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
    const validationEmail = regex.test(email);
    const validate = validateLength && validationEmail;
    if (validate) {
      this.setState({
        buttonValidate: false,
      });
    } else {
      this.setState({
        buttonValidate: true,
      });
    }
  }

  async editProfile() {
    const { userInfo } = this.state;
    const objectEntries = Object.entries(userInfo);
    const objResult = Object.fromEntries(objectEntries);
    this.setState({ loading: true });
    await updateUser(objResult);
    this.setState({ redirect: true });
  }

  render() {
    const { userInfo, buttonValidate, loading, redirect } = this.state;
    const { name, email, image, description } = userInfo;
    return (
      <>
        <Header />
        {
          loading ? <Load /> : (
            <PerfilEditContainer data-testid="page-profile-edit">
              <div className="edit-card">
                <label htmlFor="input-name">
                  Name
                  <input
                    type="text"
                    id="input-name"
                    data-testid="edit-input-name"
                    name="name"
                    value={ name }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="input-email">
                  E-mail
                  <input
                    type="text"
                    id="input-email"
                    data-testid="edit-input-email"
                    name="email"
                    value={ email }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="input-description">
                  Descição
                  <input
                    type="text"
                    id="input-description"
                    data-testid="edit-input-description"
                    name="description"
                    value={ description }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="input-image">
                  Imagem URL
                  <input
                    type="text"
                    id="input-image"
                    data-testid="edit-input-image"
                    name="image"
                    value={ image }
                    onChange={ this.handleChange }
                  />
                </label>
                <input
                  type="button"
                  data-testid="edit-button-save"
                  disabled={ buttonValidate }
                  value="Salvar"
                  onClick={ this.editProfile }
                />
              </div>
            </PerfilEditContainer>
          )
        }
        {
          redirect ? <Redirect to="/profile" /> : ''
        }
      </>
    );
  }
}

export default ProfileEdit;
