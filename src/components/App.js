import React, { Component } from 'react';
import OrderHistory from './OrderHistory';
import Modal from './Modal';
import ModalContent from './ModalContent';

export default class App extends Component {
  state = {
    isModalOpen: false,
  };

  handleOpenModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        {' '}
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            {' '}
            <ModalContent />{' '}
          </Modal>
        )}{' '}
        <button type="button" onClick={this.handleOpenModal}>
          {' '}
          Show Modal{' '}
        </button>{' '}
        <OrderHistory />{' '}
      </div>
    );
  }
}
