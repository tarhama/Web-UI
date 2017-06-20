import React, { Component } from 'react';
import FaBars from "react-icons/lib/fa/bars";
import NavbarLeftDropdown from './navbarLeftDropdown';
import "./navbarLeftComponent.scss";

class NavbarLeftComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.showDropdown = this.showDropdown.bind(this);
    this.collapse = this.collapse.bind(this);
  }

  showDropdown() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  collapse() {
    this.setState({
      expanded: false,
    });
  }
  render() {
    return(
      <div className="navLeftComponent" tabIndex="0" onBlur={this.collapse}>
        <ul style={{display: this.props.shortIcon ? 'flex' : 'none'}}>
          <li>features</li>
          <li>themes</li>
          <li>pricing</li>
          <li>more</li>
        </ul>
        <div className="navIcon" style={{display: !this.props.shortIcon ? 'block' : 'none'}}>
             <FaBars size={28} onClick={this.showDropdown}/>
          <NavbarLeftDropdown expanded={this.state.expanded}/>
        </div>
      </div>
    )
  }
}

export default NavbarLeftComponent;
