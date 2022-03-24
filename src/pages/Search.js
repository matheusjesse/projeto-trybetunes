import React from 'react';
import Header from '../components/Header';
import Load from './Load';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumsCard from '../components/AlbumsCard';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonSearch: true,
      albums: '',
      loading: false,
      artista: '',
      recClick: false,
    };
  }

  validateButton = ({ target }) => {
    const text = target.value;
    const minNameLength = 2;
    const validation = text.length >= minNameLength;
    this.setState({ artista: text });
    if (validation) {
      this.setState({ buttonSearch: false });
    } else {
      this.setState({ buttonSearch: true });
    }
  }

  albumSearch = () => {
    const albumInput = document.querySelector('#inputAlbums').value;
    this.setState({ loading: true }, async () => {
      const albunsLoading = await searchAlbumsAPI(albumInput);
      this.setState({
        loading: false,
        recClick: true,
        albums: albunsLoading,
      });
    });
  }

  render() {
    const { buttonSearch, loading, artista, recClick, albums } = this.state;
    return (
      <>
        <Header />
        {
          loading ? <Load /> : (
            <div data-testid="page-search">
              <input
                type="text"
                id="inputAlbums"
                data-testid="search-artist-input"
                onChange={ this.validateButton }
              />
              <button
                type="button"
                data-testid="search-artist-button"
                value="Search"
                disabled={ buttonSearch }
                onClick={ this.albumSearch }
              >
                Search
              </button>
              <div>
                { recClick ? <p>{ `Resultado de álbuns de: ${artista}` }</p> : '' }
              </div>
            </div>)
        }
        {
          albums.length > 0
            ? albums.map((album) => (
              <AlbumsCard
                key={ album.collectionName }
                artWorkUrl100={ album.artworkUrl100 }
                collectionName={ album.collectionName }
                artistName={ album.artistName }
                collectionId={ album.collectionId }
              />
            )) : ''
        }
        {
          albums.length === 0 && recClick === true
            ? <p>Nenhum álbum foi encontrado</p> : ''
        }
      </>
    );
  }
}

export default Search;
