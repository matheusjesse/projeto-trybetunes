import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumsCard extends React.Component {
  render() {
    const { artWorkUrl100, collectionName, artistName, collectionId } = this.props;
    return (
      <Link
        data-testid={ `link-to-album-${collectionId}` }
        to={ `/album/${collectionId}` }
      >
        <img src={ artWorkUrl100 } alt={ collectionName } />
        <h2>{ collectionName }</h2>
        <p>{ artistName }</p>
      </Link>
    );
  }
}

AlbumsCard.propTypes = {
  artWorkUrl100: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
};

export default AlbumsCard;
