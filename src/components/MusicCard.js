import React from 'react';
import PropTypes from 'prop-types';
import Load from '../pages/Load';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      load: false,
    };
  }

  handleChange = (event) => {
    const { checked } = event.target;
    const { music } = this.state;
    if (checked) {
      this.setState({ load: true }, async () => {
        await addSong(music);
        this.setState({ load: false });
      });
    }
  }

  render() {
    const { musicUrl, musicName, trackId } = this.props;
    const { load } = this.state;
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
};

export default MusicCard;