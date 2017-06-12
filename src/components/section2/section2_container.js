import React, { Component } from 'react';
import Section2Header from './parts/section2_header';
import Section2Gallery from './parts/section2_gallery';
import Section2Btn from './parts/section2_btn';
import './section2_container.scss';

class Section2Container extends Component {
  render() {
    return (
      <div className="section2-container">
        <Section2Header />
        <Section2Gallery />
        <Section2Btn />
      </div>
    );
  }
}

export default Section2Container;
