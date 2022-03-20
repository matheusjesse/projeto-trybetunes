import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonSearch: true,
    };
  }

  validateButton = ({ target }) => {
    const text = target.value;
    const minNameLength = 2;
    const validation = text.length >= minNameLength;
    if (validation) {
      this.setState({ buttonSearch: false });
    } else {
      this.setState({ buttonSearch: true });
    }
  }

  render() {
    const { buttonSearch } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-search">
          <input
            type="text"
            data-testid="search-artist-input"
            onChange={ this.validateButton }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            value="Search"
            disabled={ buttonSearch }
          >
            Search
          </button>
        </div>
      </>
    );
  }
}

export default Search;
