import { Component } from 'react';
import { Box } from 'components/Styles/Element.styled';
import { SearchBar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';
import ButtonLoadMore from './Button/Button';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export class App extends Component {
  state = {};

  render() {
    return (
      <Box px={3}>
        <SearchBar />

        <div className="gallery"></div>
        <ButtonLoadMore text="Load More" />
        <Loader />
      </Box>
    );
  }
}
