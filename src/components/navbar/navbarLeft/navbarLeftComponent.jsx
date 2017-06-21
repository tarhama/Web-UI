import React, { Component } from 'react';
import LeftDropdownButton from './leftDropdownButton';
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
        <LeftDropdownButton showDropdown={this.showDropdown}
                            expanded={this.state.expanded}
                            shortIcon={this.props.shortIcon} />
      </div>
    )
  }
}

export default NavbarLeftComponent;
