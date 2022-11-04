import React from 'react';
import { Button } from 'components/Styles/Element.styled';
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ text }) => <Button type="button">{text}</Button>;

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  text: PropTypes.string.isRequired,
};
