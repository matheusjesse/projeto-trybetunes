import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumSelected: [],
      artistName: '',
      albumName: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getAlbumsMusics(id);
  }

  getAlbumsMusics = async (id) => {
    const musicData = await getMusics(id);
    this.setState({
      albumSelected: musicData,
      artistName: musicData[0].artistName,
      albumName: musicData[0].collectionName,
    });
  }

  render() {
    const { albumName, artistName, albumSelected } = this.state;
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
