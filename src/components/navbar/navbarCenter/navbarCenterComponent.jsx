import React, { Component } from 'react';
import "./navbarCenterComponent.scss";

var logo = require("../../../../assets/images/weebly-logo-white.svg");

class NavbarCenterComponent extends Component {
  render() {
    return(
      <div className="navCenterComponent">
        <div>
          <img src={logo} height="35" alt="weebly" />
        </div>
      </div>
    )
  }
}

export default NavbarCenterComponent