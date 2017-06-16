import React, {Component} from 'react';
import * as data from '../../store/dataSection3';
import './section3_main.css';
import RenderImage from './parts/renderImages';

class Section3Images extends Component {
	constructor() {
		super();

		this.state = {
			image: data.DataSect3.images,
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


export  default Section3Images;



