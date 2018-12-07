import React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class UserAuthorizationForm extends Component {
  state = {
    isSignedOn: true,
  };

  handleCheckSignIn = () => {
    this.setState({
      isSignedOn: true,
    });
  };

  handleCheckSignUp = () => {
    this.setState({
      isSignedOn: false,
    });
  };

  render() {
    const { isSignedOn } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleCheckSignIn}>
          Sign in
        </button>{' '}
        <button type="button" onClick={this.handleCheckSignUp}>
          Sign up{' '}
        </button>{' '}
        {isSignedOn ? <SignIn /> : <SignUp />}{' '}
      </div>
    );
  }
}
