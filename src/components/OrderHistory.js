import React, { Component } from 'react';
import OrdersHistoryTable from './OrdersHistoryTable';
import OrderDetails from './OrderDetails';
import Modal from './Modal';
import * as API from '../services/api';
import Spinner from './spinner/Spinner';

export default class OrderHistory extends Component {
  state = {
    orders: [],
    isModalOpen: false,
    orderPopUp: {},
    isLoading: false,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    API.getAllOrders().then(orders =>
      this.setState({
        orders: orders.data,
        isLoading: false,
      }),
    );
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleShowDetails = id => {
    this.setState({
      isLoading: true,
    });
    API.getOrderById(id).then(order => {
      this.setState({
        isLoading: false,
        orderPopUp: order,
        isModalOpen: true,
      });
    });
  };

  render() {
    const { isModalOpen, orders, orderPopUp, isLoading } = this.state;
    return (
      <div>
        {' '}
        {isLoading ? (
          <Spinner />
        ) : (
          isModalOpen && (
            <Modal onClose={this.closeModal}>
              {' '}
              <OrderDetails order={orderPopUp} />{' '}
            </Modal>
          )
        )}{' '}
        <OrdersHistoryTable
          orders={orders}
          onShowDetails={this.handleShowDetails}
        />{' '}
      </div>
    );
  }
}
