import React, { Component } from 'react';
import NavbarLeftComponent from './navbarLeft/navbarLeftComponent';
import NavbarCenterComponent from './navbarCenter/navbarCenterComponent';
import NavbarRightComponent from './navbarRight/navbarRightComponent';

import './navbarComponent.scss';

class NavbarComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     scrollDown: false,
  //   };
  //   this.setBackground = this.setBackground.bind(this);
  // }

  // setBackground() {
  //   this.setState({
  //     scrollDown: !this.state.scrollDown,
  //   });
  // }

  render() {
    return(
      <div className="navbarTransparent navbarContainer">
        <div className="navbarComponent">
          <nav>
            <NavbarLeftComponent />
            <NavbarCenterComponent />
            <NavbarRightComponent />
          </nav>
        </div>
      </div>
      )
  }
}

export default NavbarComponent;
