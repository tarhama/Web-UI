import React, { Component } from 'react';
import "./navbarCenterComponent.scss";

class NavbarCenterComponent extends Component {

  changeClass(){
      return 'navCenterComponent ' + (this.props.changeNavbar ? 'whiteLogo' : '');
  }
  
  render() {
    const logoWhite = require("../../../../assets/images/weebly-logo-white.svg");
    const logoBlue = require("../../../../assets/images/weebly-logo-blue.svg");
    const smallLogoWhite = require("../../../../assets/images/w-white.svg");
    const smallLogoBlue = require("../../../../assets/images/w-blue.svg");

    return(
      <div className={this.changeClass()}>
        <img style={{display: this.props.shortIcon ? 'block' : 'none'}} 
             src={this.props.changeNavbar ? logoWhite : logoBlue } height="35" alt="weebly" />
        <img style={{display: !this.props.shortIcon ? 'block' : 'none'}} 
             src={this.props.changeNavbar ? smallLogoWhite : smallLogoBlue } height="35" alt="weebly" />
      </div>
    )
  }
}

export default NavbarCenterComponent;
