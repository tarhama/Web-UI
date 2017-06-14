import React, { Component } from 'react';
import HeaderSection9 from './header/headerSection9';
import ColumnsSec9 from './columns/columnsSec9';
import ButtonSec9 from './button/buttonSec9';
import "./section9Container.scss";

class Section9Container extends Component {
  render() {
    return(
      <div className="section9 container">
        <HeaderSection9 />
        <ColumnsSec9 />
        <ButtonSec9 />
      </div>
    )
  }
}

export default Section9Container;
