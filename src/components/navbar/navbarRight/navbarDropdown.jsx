import React, { Component } from 'react';
import "./navbarDropdown.scss";
import FaCaretDown from "react-icons/lib/fa/caret-down";
import FaGlobe from "react-icons/lib/fa/globe";
import Languages from "../../../store/languages";

class NavbarDropdown extends Component {
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
      <div className="navbarDropdown" tabIndex="0" onBlur={this.collapse}>
        <a onClick={this.showDropdown}>
          <FaGlobe />
          <FaCaretDown />
        </a>
        <ul className="langDropdown" style={{display: this.state.expanded ? 'block' : 'none'}}>
          {Languages.map((name, index) => {
            return this.renderDropdown(name, index)
          })}
        </ul>
      </div>
    )
  }

  renderDropdown(name, index) {
    return(
      <li key={index} className="langList">{name.name}</li>
    )
  }
}

export default NavbarDropdown;
