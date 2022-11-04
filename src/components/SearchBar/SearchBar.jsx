import {
  ButtonIcon,
  Form,
  Input,
  SearchBox,
} from 'components/Styles/Element.styled';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
//import PropTypes from 'prop-types';

export const SearchBar = () => (
  <SearchBox>
    <Form id="search-form">
      <ButtonIcon type="submit">
        <BsSearch />
      </ButtonIcon>
      <Input
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </Form>
  </SearchBox>
);
