import { Component } from 'react';
import { Box } from 'components/Styles/Element.styled';
import { SearchBar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';
import ButtonLoadMore from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
//import axios from 'axios';
import React from 'react';
import { Modal } from './Modal/Modal';
import { fetchImages } from './Api/apiService';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
//const API_KEY = '30048771-b82027b1d1dd03684fe8fb9c0';
//const QUANTITY = 12;
//axios.defaults.baseURL = 'https://pixabay.com/api';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    isLoading: false,
    largeImageURL: null,
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

    await this.setState({ isLoading: true, page: 1 });

    const response = await fetchImages(this.state.query, this.state.page);
    this.setState({
      isLoading: false,
      items: response.data.hits,
      total: response.data.totalHits,
    });
  };

  handleQueryChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
    //e.target.reset();
  };

  onClickLoadMore = async () => {
    await this.setState(prevState => {
      return { page: prevState.page + 1, loading: true };
    });

    const response = await fetchImages(this.state.query, this.state.page);

    this.setState(prevState => {
      return { items: [...prevState.items, ...response.data.hits] };
    });
  };

  showModalImage = largeImageURL => {
    const item = this.state.items.find(
      item => item.largeImageURL === largeImageURL
    );
    this.setState({
      showModal: {
        largeImageURL: item.largeImageURL,
        tags: item.tags,
      },
    });
  };

  closeModalImage = () => {
    this.setState({ showModal: null });
  };

  render() {
    const { items, total, query, showModal } = this.state;
    return (
      <Box px={3}>
        <SearchBar
          onSubmit={this.handleSubmit}
          value={query}
          onChange={this.handleQueryChange}
        />
        {items.length > 0 ? (
          <ImageGallery images={items} openModal={this.showModalImage} />
        ) : null}
        {items.length < total && (
          <ButtonLoadMore text="Load More" onClick={this.onClickLoadMore} />
        )}
        {this.state.isLoading && <Loader />}
        {showModal && (
          <Modal
            largeImageUrl={showModal.largeImageURL}
            tags={showModal.tags}
            closeModal={this.closeModalImage}
          />
        )}
      </Box>
    );
  }
}
