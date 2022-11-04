import React from 'react';
import { Input } from 'components/Styles/Element.styled';
import PropTypes from 'prop-types';

const SearchInput = ({ onChange, value }) => (
  <Input
    type="text"
    name="query"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="May contain only letters, apostrophe, dash and spaces. For example moon"
    required
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    onChange={onChange}
    value={value}
  />
);

export default SearchInput;

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
