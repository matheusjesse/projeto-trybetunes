import React from 'react';
import PropTypes from 'prop-types';
import Load from '../../pages/Load';
import { addSong, getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';
import MusicCardContainer from './style';

class MusicCard extends React.Component {
  constructor(props) {
    super(props);
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
    const { music, callBack } = this.props;
    const { favoriteCheckMusic } = this.state;

    this.setState({
      load: true,
    }, async () => {
      if (checked) {
        await addSong(music);
      } else if (!checked) {
        await removeSong(music);
        // recebi ajuda do stack overFlow pra fazer a validação do if, infelizmente perdi o link da tread.
        if (callBack) {
          callBack();
        }
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
      <MusicCardContainer>
        <p>{ musicName.length > 48 ? musicName.substring(0, 50).concat('...') : musicName }</p>
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
      </MusicCardContainer>
    );
  }
}

MusicCard.propTypes = {
  musicUrl: PropTypes.string,
  musicName: PropTypes.string,
  trackId: PropTypes.number,
  music: PropTypes.object,
}.isRequired;

export default MusicCard;
