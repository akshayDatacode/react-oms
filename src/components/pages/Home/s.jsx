import React, { Component } from 'react'

class Sd extends Component {
  state = {
    d: "Akshay"
  }

  render() {
    return (
      <>
        <h1>First Name: {this.state.d}</h1>
        <h1>Last Name: {this.props.lastName}</h1>
      </>
    );
  }
}

export default Sd;