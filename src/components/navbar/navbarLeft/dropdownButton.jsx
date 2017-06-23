import React, { Component } from 'react';
import FaBars from "react-icons/lib/fa/bars";
import FaClose from "react-icons/lib/fa/close";
import './dropdownButton.scss';

class DropdownButton extends Component {
  render() {
    return(
      <div onClick={this.props.isExpanded}>
        <FaBars size={28}
                className={this.props.expanded ? 'showDropdownBtn' : 'hideDropdownBtn'}/>
        <FaClose size={28}
                 className={!this.props.expanded ? 'showDropdownBtn' : 'hideDropdownBtn'}/>
      </div>
    )
  }
}

export default DropdownButton;
