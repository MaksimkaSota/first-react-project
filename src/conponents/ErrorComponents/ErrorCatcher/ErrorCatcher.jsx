import React from 'react';

export class ErrorCatcher extends React.Component {
  componentDidCatch(error, errorInfo) {
    this.props.setAppCrash(true);
    console.log(error.message);
  }

  render() {
    return this.props.children;
  }
}
