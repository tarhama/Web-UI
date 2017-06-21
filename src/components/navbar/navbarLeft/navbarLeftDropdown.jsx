import React, { Component } from 'react';
import *as data from '../../../store/dataNavbar';
import './navbarLeftDropdown.scss';

class NavbarLeftDropdown extends Component {
  render() {
    const navList = data.DataNavbar.leftNavbar;
    
    const leftList = (name, index) => {
      let li = <li key={index} className="leftList">{name.title}</li>;
      return li;
    };

    const leftUlList = (x) => (
      x.map((name, index) => {
        return leftList(name, index);
      })
    );

    return(
      <div className="leftDropdown">
        <ul style={{display: this.props.expanded ? 'block' : 'none'}}>{leftUlList(navList)}</ul>
      </div>
    )
  }
}

export default NavbarLeftDropdown;
