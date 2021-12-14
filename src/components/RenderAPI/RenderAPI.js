import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGallery from '../ImageGallery';
import Loader from '../Loader';
import Initial from '../Initial';
import Button from '../Button';
import NotFound from '../NotFound';
import API from '../../services/searchAPI';

export default class RenderAPI extends Component {
  state = {
    page: 1,
    images: [],
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.searchQuery;
    const curentSearch = this.props.searchQuery;

    const prevPage = prevState.page;
    const curentPage = this.state.page;

    if (prevSearch !== curentSearch) {
      this.resetImages();
      this.onSearch();
      this.setState({ status: 'pending' });
    }
    if (prevPage !== curentPage) {
      this.onSearch();
      this.setState({ status: 'pending' });
    }
  }

  onSearch() {
    this.setState({ status: 'pending' });
    const { page } = this.state;
    const { searchQuery } = this.props;

    API(searchQuery, page)
      .then(query => {
        if (query.hits.length === 0) {
          return Promise.reject(
            new Error(`Results for: ${searchQuery}  not found.`),
          );
        }
        this.setState({
          images: [...this.state.images, ...query.hits],
          status: 'resolved',
        });
        this.onScroll();
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  }

  onScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
      block: 'end',
    });
  };

  resetImages = () => {
    this.setState({ images: [], page: 1 });
  };

  handleLoadmoreButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.onScroll();
  };

  render() {
    const { status, images, error } = this.state;
    if (status === 'idle') {
      return <Initial />;
    }
    if (status === 'pending') {
      return (
        <>
          <Loader />
          <ImageGallery images={images} />
        </>
      );
    }
    if (status === 'rejected') {
      return <NotFound onError={error.message} />;
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={images} />
          <Button onClick={this.handleLoadmoreButton} />
        </>
      );
    }
  }
}

RenderAPI.propTypes = {
  searchQuery: PropTypes.string,
};
