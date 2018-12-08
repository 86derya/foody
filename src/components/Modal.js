import React, { Component, createRef } from 'react';

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    maxWidth: 600,
    minHeight: 300,
    backgroundColor: '#fff',
    padding: 16,
  },
};
export default class Modal extends Component {
  containerRef = createRef();

  componentDidMount() {
    window.addEventListener('click', this.handleCloseModal);
    window.addEventListener('keydown', this.handleESCWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleCloseModal);
    window.removeEventListener('keydown', this.handleESCWindow);
  }

  handleCloseModal = ({ target }) => {
    const { onClose } = this.props;
    if (target !== this.containerRef.current) return;
    onClose();
  };

  handleESCWindow = e => {
    const { onClose } = this.props;
    const keyDown = e.keyCode;
    if (keyDown !== 27) return;
    onClose();
  };

  render() {
    const { onClose, children } = this.props;

    return (
      <div style={styles.backdrop} ref={this.containerRef}>
        <div style={styles.modal}>
          {' '}
          <div> {children} </div>{' '}
          <button type="button" onClick={onClose}>
            Close{' '}
          </button>{' '}
        </div>{' '}
      </div>
    );
  }
}
