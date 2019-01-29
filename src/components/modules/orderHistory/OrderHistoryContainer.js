import React, { Component } from 'react';
import OrdersHistoryTable from './orderTable/OrdersHistoryTable';
import NewOrderForm from './newOrderForm/NewOrderForm';
import OrderDetailsTemplate from './orderTable/ModalOrderDetailsTemplate';
import Modal from '../../modal';
import styles from './OrderHistory.module.css';
import * as API from '../../../services/api';
import Spinner from '../../spinner';

export default class OrderHistory extends Component {
  state = {
    orders: [],
    isModalOpen: false,
    orderDetails: {},
    isLoading: false,
    detailsShown: false,
    newOrderFormShown: false,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    this.getAllUsers();
  }

  handleShowDetails = id => {
    this.setState({
      isModalOpen: true,
      isLoading: true,
      detailsShown: true,
    });
    this.getOrderDetails(id);
  };

  handleShowNewOrderForm = () => {
    this.setState({
      isModalOpen: true,
      newOrderFormShown: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      detailsShown: false,
      newOrderFormShown: false,
    });
  };

  getAllUsers = () => {
    API.getAllOrders().then(orders =>
      this.setState({
        orders: orders.data,
        isLoading: false,
      }),
    );
  };

  getOrderDetails = ({ id }) => {
    API.getOrderById(id).then(order => {
      this.setState({
        isLoading: false,
        orderDetails: order,
        isModalOpen: true,
      });
    });
  };

  handleDelete = ({ id }) => {
    this.setState({ isLoading: true });
    API.deleteOrderById(id).then(
      this.setState(state => ({
        orders: state.orders.filter(item => item.id !== id),
        isLoading: false,
      })),
    );
  };

  postNewOrder = order => {
    const { price, address, rating } = order;
    this.setState({ isLoading: true });
    return API.addOrder({
      date: new Date().toLocaleDateString('en-US'),
      price,
      address,
      rating,
    });
  };

  handleSubmitNewOrder = order => {
    this.postNewOrder(order).then(response =>
      response.status === 201
        ? this.setState(prevState => ({
            orders: [...prevState.orders, response.data],
            isLoading: false,
            isModalOpen: false,
            newOrderFormShown: false,
          }))
        : null,
    );
  };

  render() {
    const {
      isModalOpen,
      orders,
      orderDetails,
      isLoading,
      detailsShown,
      newOrderFormShown,
    } = this.state;

    const AddNewOrderBtn = () => (
      <button
        className={styles.add_new_order_button}
        type="button"
        onClick={this.handleShowNewOrderForm}
      >
        Add New Order
      </button>
    );
    return (
      <div className={styles.order_history}>
        {isLoading ? (
          <Spinner />
        ) : (
          isModalOpen && (
            <Modal onClose={this.closeModal}>
              {detailsShown && <OrderDetailsTemplate order={orderDetails} />}
              {newOrderFormShown && (
                <NewOrderForm onPostOrder={this.handleSubmitNewOrder} />
              )}
            </Modal>
          )
        )}
        <OrdersHistoryTable
          orders={orders}
          onShowDetails={this.handleShowDetails}
          onDelete={this.handleDelete}
        />
        <AddNewOrderBtn />
      </div>
    );
  }
}
