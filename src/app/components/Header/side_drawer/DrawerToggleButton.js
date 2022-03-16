import React, { Component } from "react";

class DrawerToggleButton extends Component {
  state = {};
  render() {
    return (
      <>
        <button className="toggle-button" onClick={this.props.clickButton}>
          <div className="toggle-button_line"></div>
          <div className="toggle-button_line"></div>
          <div className="toggle-button_line"></div>
        </button>
      </>
    );
  }
}

export default DrawerToggleButton;
