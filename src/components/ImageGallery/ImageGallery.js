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

  handleClick = largeImageURL => {
    this.setState({ imageModal: largeImageURL });
    this.toggleModal();
  };

  onArrowRight = () => {
    const sourceImg = this.props.images.map(({ largeImageURL }) => {
      return largeImageURL;
    });
    let indexOfImg = sourceImg.indexOf(this.state.imageModal);

    if (indexOfImg + 1 > sourceImg.length - 1) {
      indexOfImg = -1;
    }
    this.setState({ imageModal: sourceImg[indexOfImg + 1] });
  };

  onArrowLeft = () => {
    const sourceImg = this.props.images.map(({ largeImageURL }) => {
      return largeImageURL;
    });
    let indexOfImg = sourceImg.indexOf(this.state.imageModal);

    if (indexOfImg === 0) {
      indexOfImg = sourceImg.length;
    }
    this.setState({ imageModal: sourceImg[indexOfImg - 1] });
  };

  render() {
    const { images } = this.props;
    const { showModal, imageModal } = this.state;

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
                onClick={() => {
                  this.handleClick(largeImageURL);
                }}
              />
            );
          })}
        </ul>
        {showModal && (
          <Modal
            imageModal={imageModal}
            onClose={this.toggleModal}
            onArrowRight={this.onArrowRight}
            onArrowLeft={this.onArrowLeft}
          />
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
