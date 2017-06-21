import React, { Component } from 'react';
import NavbarDropdown from "./navbarDropdown";
import SignupBtn from "./signupBtn";
import "./navbarRightComponent.scss";

class NavbarRightComponent extends Component {
  render() {
    return(
      <div>
        <ul className="navRightComponent">
          <li>
            <NavbarDropdown />
          </li>
          <li><a>log&nbsp;in</a></li>
          <li>
            <SignupBtn changeNavbar={this.props.changeNavbar}
                       shortIcon={this.props.shortIcon}/>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavbarRightComponent;
