import React, { Component } from 'react';
import './navbarLeftDropdown.scss';
import './navbarLeftComponent'

class NavbarLeftDropdown extends Component {
	constructor(props){
		super(props);
	}
  render() {

    const navList = this.props.leftDropdownJSON;

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
