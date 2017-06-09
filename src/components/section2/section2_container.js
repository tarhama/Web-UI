import React, { Component } from 'react';
import Section2Header from './parts/section2_header';
import Section2TabItems from './parts/section2_tab_items';
import Section2ImgCards from './parts/section2_img_cards';
import Section2Btn from './parts/section2_btn';

class Section2Container extends Component {
  render() {
    return (
      <div className="section2-container">
        <Section2Header />
        <Section2TabItems />
        <Section2ImgCards />
        <Section2Btn />
      </div>
    );
  }
}

export default Section2Container;
