/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styles from './Authorization.module.css';
import SignInConfig from '../../configs/SignInConfig.json';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default class SignIn extends Component {
  state = { ...INITIAL_STATE };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.reset();
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const input = SignInConfig.map(el => (
      <input
        key={el.name}
        className={styles.input}
        onChange={this.handleChange}
        name={el.name}
        type={el.type}
        value={this.state[el.name]}
        autoComplete={el.autoComplete}
        placeholder={el.placeholder}
      />
    ));
    return (
      <form className={styles.auth_form} onSubmit={this.handleSubmit}>
        {input}
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    );
  }
}
