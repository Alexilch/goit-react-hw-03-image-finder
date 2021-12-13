import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';
import Modal from '../Modal/Modal';
import PropTypes, { shape } from 'prop-types';
export default class ImageGallery extends Component {
  state = {
    showModal: false,
    imageModal: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleClick = event => {
    this.setState({ imageModal: event.target.dataset.source });
    this.toggleModal();
  };

  render() {
    const { images } = this.props;
    const { showModal, imageModal } = this.state;
    // console.log(images)
    return (
      <>
        <ul className={s.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                onClick={this.handleClick}
                // ref={ref}
              />
            );
          })}
        </ul>
        {showModal && (
          <Modal imageModal={imageModal} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    }),
  ),
};
