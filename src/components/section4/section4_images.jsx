import React from 'react';
import * as data from '../../store/dataSection4';
import './section4_main.css';
import RenderImage from './../section3/parts/renderImages';

class Section4Images extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			image: this.props.ImagesJSON.images,
			scrollTop: 0,
		};
	}

	render() {
		return (
			<div className="d-flex justify-content-center">
				<div className="image-wrapper relative">
					<RenderImage dataImage={this.state.image}/>
				</div>
			</div>
		);
	}
}

export  default Section4Images;
