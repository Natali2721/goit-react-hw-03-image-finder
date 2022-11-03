import { Component } from 'react';

import { Box } from './Box/Box';
import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {};

  render() {
    return (
      <Box as="main" px={3}>
        <SearchBar />

        <div className="gallery"></div>
        <button type="button" className="load-more button">
          Load more
        </button>
      </Box>
    );
  }
}
