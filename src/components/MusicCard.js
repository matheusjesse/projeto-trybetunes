import React from 'react';
import PropTypes from 'prop-types';
import Load from '../pages/Load';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      load: false,
      favoriteCheckMusic: false,
    };
  }

  async componentDidMount() {
    const { trackId } = this.props;
    const favoritesMusics = await getFavoriteSongs();
    this.setState({
      favoriteCheckMusic: favoritesMusics.some((music) => music.trackId === trackId),
    });
  }

  handleChange = (event) => {
    const { checked } = event.target;
    const { music } = this.props;
    const { favoriteCheckMusic } = this.state;

    this.setState({
      load: true,
    }, async () => {
      if (checked) {
        await addSong(music);
      } else {
        await removeSong(music);
      }
      this.setState({
        favoriteCheckMusic: !(favoriteCheckMusic),
        load: false,
      });
    });
  }

  render() {
    const { musicUrl, musicName, trackId } = this.props;
    const { load, favoriteCheckMusic } = this.state;
    return (
      <div>
        <p>{ musicName }</p>
        <audio data-testid="audio-component" src={ musicUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label htmlFor={ trackId }>
          Favorita
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            checked={ favoriteCheckMusic }
            id={ trackId }
            onChange={ this.handleChange }
          />
        </label>
        { load ? <Load /> : '' }
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicUrl: PropTypes.string.isRequired,
  musicName: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  music: PropTypes.object.isRequired,
};

export default MusicCard;
