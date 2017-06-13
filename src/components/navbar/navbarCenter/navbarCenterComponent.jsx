import React, { Component } from 'react';
import "./navbarCenterComponent.scss";

class NavbarCenterComponent extends Component {

  changeClass(){
      return 'navCenterComponent ' + (this.props.changeNavbar ? 'whiteLogo' : '');
  }
  
  render() {
    const logoWhite = require("../../../../assets/images/weebly-logo-white.svg");
    const logoBlue = require("../../../../assets/images/weebly-logo-blue.svg");

    return(
      <div className={this.changeClass()}>
        <img src={this.props.changeNavbar ? logoWhite : logoBlue} height="35" alt="weebly" />
      </div>
    )
  }
}

export default NavbarCenterComponent;
