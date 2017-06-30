import React, {Component} from 'react';

import Section2Gallery from './parts/section2_gallery';
import GeneralBtn from './../buttons/generalBtn';
import './section2_container.scss';

import Title from '../titleSubtitle/title'

import '../../app'

class Section2Container extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Section2JSON: this.props.Section2JSON
		};
	}

	render() {
		return (
			<div className="section2-container">
				<Title
					titleText={this.state.Section2JSON.header.title}
					subTitle={this.state.Section2JSON.header.subtitle}
					subTitleColor={'gray'}
				/>
				<Section2Gallery GalleryJSON={this.state.Section2JSON}/>
				<GeneralBtn btnText="More featured Themes"/>
			</div>
		);
	}
}

export default Section2Container;
