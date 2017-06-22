import React, { Component } from 'react';
import DropdownComponent from './dropdownComponent';
import *as data from '../../../store/dataNavbar';
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
    const navLeft = data.DataNavbar.leftNav;

    const renderLeftNav = (name, index) => {
      let leftLi = <li key={index}>{name.name}</li>;
      return leftLi;
    };

    const leftNavUl = (x) => (
      x.map((name, index) => {
        return renderLeftNav(name, index);
      })
    );

    return(
      <div className="navLeftComponent"
           tabIndex="0"
           onBlur={this.collapse}>
        <ul style={{display: this.props.shortIcon ? 'flex' : 'none'}}>
          {leftNavUl(navLeft)}
        </ul>
        <DropdownComponent showDropdown={this.showDropdown}
                            expanded={this.state.expanded}
                            shortIcon={this.props.shortIcon} />
      </div>
    )
  }
}

export default NavbarLeftComponent;
