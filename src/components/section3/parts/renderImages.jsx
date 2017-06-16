import React, {Component} from 'react';
import './../section3_images';

export default class RenderImages extends Component {

	constructor(props) {
		super(props);

		this.state = {
			imageProps: this.props.dataImage
		};

		this.renderImages = this.renderImages.bind(this);
	}

	renderImages(image) {
		return (
			<div className={"image-items image-transition " + image.className}>
				<img src={image.src} alt={image.name}/>
			</div>
		)
	}

	render() {
		return (
			<div>
				{this.state.imageProps.map(this.renderImages)}
			</div>

		)
	}
}




