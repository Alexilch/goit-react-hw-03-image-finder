import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlekeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlekeyDown);
  }

  handlekeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { imageModal } = this.props;
    return createPortal(
      <div className={s.overlay} onClick={this.handleBackDropClick}>
        <div className={s.modal}>
          <img src={imageModal} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  modalImg: PropTypes.string,
  onClose: PropTypes.func,
};
