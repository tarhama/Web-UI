import React, { Component } from 'react';
import "./navbarLeftComponent.scss";

class NavbarLeftComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeIcon: true,
    };
    this.resizePage = this.resizePage.bind(this);
  }

  componentDidMount() {
    this.resizePage();
    window.addEventListener('resize', this.resizePage);
  }

  resizePage() {
    let minWidth = 768;
    let currentWidth = window.innerWidth;

    if(currentWidth < minWidth) {
      this.setState({
        changeIcon: false,
      });
    } else {
      this.setState({
        changeIcon: true,
      });
    }
  }

  activeClass(){
    return 'navbarContainer ' + (this.state.changeIcon ? 'navbarTransparent' : 'navIcon');
  }

  render() {
    return(
      <div className="navLeftComponent">
        <ul style={{display: this.state.changeIcon ? 'flex' : 'none'}}>
          <li>features</li>
          <li>themes</li>
          <li>pricing</li>
          <li>more</li>
        </ul>
        <div className="navIcon" style={{display: !this.state.changeIcon ? 'block' : 'none'}}>
             ☰
        </div>
      </div>
    )
  }
}

export default NavbarLeftComponent