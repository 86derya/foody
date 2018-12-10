import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  phone: '',
};
export default class SignUp extends Component {
  state = { ...INITIAL_STATE };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.reset();
  };

  handleChange = e => {
    const { value } = e.target;
    const { name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password, name, phone } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name..."
          onChange={this.handleChange}
          value={name}
          autoComplete="off"
        />
        <input
          name="password"
          type="password"
          placeholder="Password..."
          onChange={this.handleChange}
          value={password}
          autoComplete="off"
        />
        <input
          name="email"
          type="email"
          placeholder="Email..."
          onChange={this.handleChange}
          value={email}
          autoComplete="off"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number..."
          onChange={this.handleChange}
          value={phone}
          autoComplete="off"
        />
        <button type="submit"> Sign Up </button>
      </form>
    );
  }
}
