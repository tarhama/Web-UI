import React, { Component } from 'react';
import NavbarLeftComponent from './navbarLeft/navbarLeftComponent';
import NavbarCenterComponent from './navbarCenter/navbarCenterComponent';
import NavbarRightComponent from './navbarRight/navbarRightComponent';

import styles from './navbarComponent.css';

class NavbarComponent extends Component {
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

export default NavbarComponent