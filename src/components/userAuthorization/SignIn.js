import React, { Component } from 'react';

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
    console.log(this.state);
    this.reset();
  };

  handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    const { name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email..."
          onChange={this.handleChange}
          value={email}
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
        <button type="submit"> Sign In </button>
      </form>
    );
  }
}
