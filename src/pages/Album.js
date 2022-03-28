import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumSelected: [],
      artistName: '',
      albumName: '',
      favoriteMusics: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getAlbumsMusics(id);
    this.getFavoritesMusics();
  }

  getAlbumsMusics = async (id) => {
    const musicData = await getMusics(id);
    this.setState({
      albumSelected: musicData,
      artistName: musicData[0].artistName,
      albumName: musicData[0].collectionName,
    });
  }

  getFavoritesMusics = async () => {
    const musicData = await getFavoriteSongs();
    const musicDataId = musicData.map(({ trackId }) => trackId);
    this.setState({ favoriteMusics: musicDataId });
  }

  render() {
    const { albumName, artistName, albumSelected, favoriteMusics } = this.state;
    const filterAlbum = albumSelected.filter((item, index) => index > 0);
    return (
      <>
        <Header />
        <div data-testid="page-album">
          <h1 data-testid="artist-name">{ artistName }</h1>
          <h2 data-testid="album-name">{ albumName }</h2>
          {
            filterAlbum.map((music) => (
              <MusicCard
                key={ music.trackId }
                musicName={ music.trackName }
                musicUrl={ music.previewUrl }
                trackId={ music.trackId }
                music={ music }
                favorites={ favoriteMusics }
              />))
          }
        </div>
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default Album;
