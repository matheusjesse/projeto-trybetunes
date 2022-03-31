import React from 'react';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Load from './Load';
import MusicCard from '../components/MusicCard';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      load: false,
      favMusics: [],
    };
  }

  async componentDidMount() {
    const favoriteMusics = await getFavoriteSongs();
    this.setState({
      load: true,
    }, () => {
      this.setState({
        favMusics: favoriteMusics,
        load: false,
      });
    });
  }

  getingFavSongLocalStorage = () => {
    this.setState({ load: true }, async () => {
      const favSongs = await JSON.parse(window.localStorage.getItem('favorite_songs'));
      console.log(favSongs);
      this.setState({
        favMusics: favSongs,
        load: false,
      });
    });
  }

  gettingLocalStorageUpdate() {
    const favStorage = JSON.parse(window.localStorage.getItem('favorite_songs'));
    console.log(favStorage);
  }

  upddateFavMusicList = () => {
    this.setState({
      favMusics: JSON.parse(window.localStorage.getItem('favorite_songs')),
    });
  }

  render() {
    const { load, favMusics } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-favorites">
          {
            favMusics.map((musics) => (
              <MusicCard
                key={ musics.trackId }
                musicName={ musics.trackName }
                musicUrl={ musics.previewUrl }
                trackId={ musics.trackId }
                music={ musics }
                callBack={ this.upddateFavMusicList }
              />
            ))
          }
        </div>
        { load && <Load /> }
      </>
    );
  }
}

export default Favorites;
