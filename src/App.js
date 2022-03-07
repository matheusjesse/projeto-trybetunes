import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <>
        <Route path="/" component={ Login } exact />
        <Route path="/search" component={ Search } exact />
      </>
    );
  }
}

export default App;
