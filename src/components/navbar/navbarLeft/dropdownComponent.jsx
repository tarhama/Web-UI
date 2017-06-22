import React, { Component } from 'react';
import NavbarLeftDropdown from './navbarLeftDropdown';
import FaBars from "react-icons/lib/fa/bars";
import FaClose from "react-icons/lib/fa/close";
import './dropdownComponent.scss';

class DropdownComponent extends Component {
  render() {
    const addClass = () => {
      return 'navIcon ' + (!this.props.shortIcon ? 'navIconShow' : 'navIconNone');
    }

    return(
      <div className={addClass()}>
        <FaBars size={28}
                onClick={this.props.showDropdown}
                style={{display: this.props.expanded ? 'none' : 'block'}}/>
        <FaClose size={28}
                 onClick={this.props.showDropdown}
                 style={{display: this.props.expanded ? 'block' : 'none'}}/>
        <NavbarLeftDropdown expanded={this.props.expanded}/>
      </div>
    )
  }
}

export default DropdownComponent;
