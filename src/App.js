import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';

class App extends React.Component {
  render() {
    return (
      <>
        <Route path="/" component={ Login } exact />
        <Route path="/search" component={ Search } exact />
        <Route path="/album/:id" component={ Album } exact />
        <Route path="/favorites" component={ Favorites } exact />
        <Route path="/profile" component={ Profile } exact />
        <Route path="/profile/edit" component={ ProfileEdit } exact />
      </>
    );
  }
}

export default App;
