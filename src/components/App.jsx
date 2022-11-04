import { Component } from 'react';
import { Box } from 'components/Styles/Element.styled';
import { SearchBar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';
import ButtonLoadMore from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import axios from 'axios';
import React from 'react';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
const API_KEY = '30048771-b82027b1d1dd03684fe8fb9c0';
const QUANTITY = 12;
axios.defaults.baseURL = 'https://pixabay.com/api';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    isLoading: false,
    imageURL: null,
    total: null,
  };
  componentDidUpdate(_, prevState) {
    if (prevState.items !== this.state.items) {
      this.setState({ loading: false });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    //console.log(this.state.query, this.state.page);

    this.setState({ isLoading: true, page: 1 });
    const response = await axios.get(
      `/?q=${this.state.query}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&language=en&per_page=${QUANTITY}&page=1`
    );
    this.setState({
      isLoading: false,
      items: response.data.hits,
      total: response.data.totalHits,
    });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onClickLoadMore = async () => {
    await this.setState(prevState => {
      return { page: prevState.page + 1, loading: true };
    });

    const response = await axios.get(
      `/?q=${this.state.query}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&language=en&per_page=${QUANTITY}&page=${this.state.page}`
    );

    this.setState(prevState => {
      return { items: [...prevState.items, ...response.data.hits] };
    });
  };
  render() {
    const { items, total, query } = this.state;
    return (
      <Box px={3}>
        <SearchBar
          onSubmit={this.handleSubmit}
          value={query}
          onChange={this.handleChange}
        />
        {items.length > 0 ? <ImageGallery images={items} /> : null}
        {items.length < total && (
          <ButtonLoadMore text="Load More" onClick={this.onClickLoadMore} />
        )}
        {this.state.isLoading && <Loader />}
      </Box>
    );
  }
}
