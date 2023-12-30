import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
  };

  handleSubmit = value => {
    this.setState({ query: value });
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
      </>
    );
  }
}
