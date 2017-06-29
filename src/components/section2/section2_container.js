import React, { Component } from 'react';

import Section2Header from './parts/section2_header';
import Section2Gallery from './parts/section2_gallery';
import GeneralBtn from './../buttons/generalBtn';
import './section2_container.scss';

import '../../app'

class Section2Container extends Component {
	constructor(props){
		super(props);

		this.state = {
			Section2JSON: this.props.Section2JSON
		};
	}

  render() {
    return (
      <div className="section2-container">
        <Section2Header />
        <Section2Gallery GalleryJSON = {this.state.Section2JSON} />
        <GeneralBtn btnText="More featured Themes" />
      </div>
    );
  }
}

export default Section2Container;
