import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlbumCardContainer from './style';

class AlbumsCard extends React.Component {
  render() {
    const { artWorkUrl100, collectionName, artistName, collectionId } = this.props;
    return (
      <AlbumCardContainer>
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${collectionId}` }
        >
          <img src={ artWorkUrl100 } alt={ collectionName } />
          <div className="text-card-container">
            <h2>
                { 
                  collectionName.length > 48 ? collectionName.substring(0, 50).concat('...') : collectionName
                }      
            </h2>
            <p>{ artistName }</p>
          </div>
        </Link>
      </AlbumCardContainer>
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
