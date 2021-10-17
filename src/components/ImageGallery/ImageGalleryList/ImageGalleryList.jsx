import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGalleryList = ({ images, onModalOpen }) => (
  <ul className="ImageGallery" onClick={onModalOpen}>
    {images.map(image => (
      <ImageGalleryItem
        key={`image-item-image-${image.id}`}
        // webformatURL={image.webformatURL}
        // tags={image.tags}
        // largeImageURL={image.largeImageURL}
        // {...image}
        image={image}
      />
    ))}
  </ul>
);
export default ImageGalleryList;

// ImageGalleryList.propTypes = {
//   image: PropTypes.shape({
//     webformatURL: PropTypes.string,
//     tags: PropTypes.string,
//   }).isRequired,
//   onModalOpen: PropTypes.func.isRequired,
// };
