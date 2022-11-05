import React from 'react';
import { Gallery, GalleryItem, Img } from 'components/Styles/Element.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <Gallery>
      {images.map(image => (
        <GalleryItem key={image.id}>
          <Img
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => openModal(image.largeImageURL)}
            loading="lazy"
          />
        </GalleryItem>
      ))}
    </Gallery>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      tags: PropTypes.string,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
