import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';

class App extends React.Component {
  render() {
    return (
      <>
        <Route path="/" component={ Login } exact />
        <Route path="/search" component={ Search } exact />
        <Route path="/album/:id" component={ Album } exact />
      </>
    );
  }
}

export default App;
