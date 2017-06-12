import React, { Component } from 'react';
import HeaderSection9 from './header/headerSection9';
import LeftColumnSec9 from './leftColumn/leftColumnSec9';
import "./section9Container.scss";

class Section9Container extends Component {
  render() {
    return(
      <div className="container-fluid section9">
        <HeaderSection9 />
        <LeftColumnSec9 />
      </div>
    )
  }
}

export default Section9Container;
