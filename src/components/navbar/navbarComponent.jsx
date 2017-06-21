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
      changeIcon: true,
      shortIcon: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.resizePage = this.resizePage.bind(this);
  }

  componentDidMount() {
    this.resizePage();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.resizePage);
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

  resizePage() {
    let minWidth = 768;
    let currentWidth = window.innerWidth;

    if(currentWidth < minWidth) {
      this.setState({
        shortIcon: false,
      });
    } else {
      this.setState({
        shortIcon: true,
      });
    }

    if(currentWidth > minWidth) {
      this.setState({
        changeIcon: false,
      });
    } else {
      this.setState({
        changeIcon: true,
      });
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
            <NavbarLeftComponent shortIcon={this.state.shortIcon}/>
            <NavbarCenterComponent changeNavbar={this.state.changeNavbar}
                                   shortIcon={this.state.shortIcon}/>
            <NavbarRightComponent changeNavbar={this.state.changeNavbar}
                                  shortIcon={this.state.shortIcon}/>
          </nav>
        </div>
      </div>
    )
  }
}

export default NavbarComponent;
