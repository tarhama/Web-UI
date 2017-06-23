import React, { Component } from 'react';
import DropdownComponent from './dropdownComponent';
import *as data from '../../../store/dataNavbar';
import "./navbarLeftComponent.scss";

class NavbarLeftComponent extends Component {  
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
      <div className="navLeftComponent">
        <ul>
          {leftNavUl(navLeft)}
        </ul>
        <DropdownComponent /*shortIcon={this.props.shortIcon}*/ />
      </div>
    )
  }
}

export default NavbarLeftComponent;
