import React, { Component } from 'react';
import FaBars from "react-icons/lib/fa/bars";
import "./navbarLeftComponent.scss";

class NavbarLeftComponent extends Component {
  render() {
    return(
      <div className="navLeftComponent">
        <ul style={{display: this.props.shortIcon ? 'flex' : 'none'}}>
          <li>features</li>
          <li>themes</li>
          <li>pricing</li>
          <li>more</li>
        </ul>
        <div className="navIcon" style={{display: !this.props.shortIcon ? 'block' : 'none'}}>
             <FaBars size={28}/>
        </div>
      </div>
    )
  }
}

export default NavbarLeftComponent;
