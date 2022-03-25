import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { musicUrl, musicName } = this.props;
    return (
      <div>
        <p>{ musicName }</p>
        <audio data-testid="audio-component" src={ musicUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicUrl: PropTypes.string.isRequired,
  musicName: PropTypes.string.isRequired,
};

export default MusicCard;
