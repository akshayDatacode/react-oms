import React, { Component } from 'react'
import Sd from './s';

class Chill extends Component {
  state = {
    name: "Akshay",
    lname: "Ram"
  }

  render() {
    return (
      <>
        <Sd lastName={this.state.lname}/>
      </>
    );
  }
}

export default Chill;