import React, { Component } from 'react';
import "./navbarLeftComponent.scss";

class NavbarLeftComponent extends Component {
  render() {
    return(
      <div className="navLeftComponent">
        <ul>
          <li>features</li>
          <li>themes</li>
          <li>pricing</li>
          <li>more</li>
        </ul>
      </div>
    )
  }
}

export default NavbarLeftComponent