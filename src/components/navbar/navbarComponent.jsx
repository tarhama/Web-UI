import React, { Component } from 'react';
import NavbarLeftComponent from './navbarLeft/navbarLeftComponent';
import NavbarCenterComponent from './navbarCenter/navbarCenterComponent';
import NavbarRightComponent from './navbarRight/navbarRightComponent';
import './navbarComponent.scss';

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeNavbar: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    let navbarHeight = 85;
    if(scrollTop > navbarHeight) {
      this.setState({
        changeNavbar: false,
      })
    } else {
      this.setState({
        changeNavbar: true,
      })
    }
  }

  isActive(){
    return 'navbarContainer ' + (this.state.changeNavbar ? 'navbarTransparent' : 'navbarWhiteBackground');
  }

  render() {
    return(
      <div className={this.isActive()}>
        <div className="navbarComponent">
          <nav>
            <NavbarLeftComponent />
            <NavbarCenterComponent changeNavbar={this.state.changeNavbar} />
            <NavbarRightComponent changeNavbar={this.state.changeNavbar}/>
          </nav>
        </div>
      </div>
    )
  }
}

export default NavbarComponent;
