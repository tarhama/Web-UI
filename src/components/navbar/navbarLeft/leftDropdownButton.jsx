import React, { Component } from 'react';
import NavbarLeftDropdown from './navbarLeftDropdown';
import FaBars from "react-icons/lib/fa/bars";
import FaClose from "react-icons/lib/fa/close";
import './leftDropdownButton.scss';
import './navbarLeftComponent'

class LeftDropdownButton extends Component {
	constructor(props){
		super(props);
	}
  render() {

    return(
      <div className="navIcon" style={{display: !this.props.shortIcon ? 'block' : 'none'}}>
        <FaBars size={28} onClick={this.props.showDropdown}
                style={{display: this.props.expanded ? 'none' : 'block'}}/>
        <FaClose size={28} onClick={this.props.showDropdown}
                 style={{display: this.props.expanded ? 'block' : 'none'}}/>
        <NavbarLeftDropdown
					expanded={this.props.expanded}
					leftDropdownJSON={this.props.leftDropdownJSON}/>
      </div>
    )
  }
}

export default LeftDropdownButton;
