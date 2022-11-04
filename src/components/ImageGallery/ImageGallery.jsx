import React from 'react';
import { Gallery, GalleryItem, Img } from 'components/Styles/Element.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(image => (
        <GalleryItem key={image.id}>
          <Img src={image.webformatURL} alt={image.tags} loading="lazy" />
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
