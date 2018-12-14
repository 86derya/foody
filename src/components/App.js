import React, { Component } from 'react';
import OrderHistory from './orderHistory';
import Modal from './modal/Modal';
import ModalContent from './modal/ModalContent';

import styles from './index.module.css';

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
    const ShowModalBtn = () => (
      <button
        className={styles.button}
        type="button"
        onClick={this.handleOpenModal}
      >
        Show Modal
      </button>
    );

    return (
      <div>
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <ModalContent />
          </Modal>
        )}
        <ShowModalBtn />
        <OrderHistory />
      </div>
    );
  }
}
