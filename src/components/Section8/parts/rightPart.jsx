import React from 'react'

import './rightPart.css'
import Carousel from './Carousel.jsx';
import Dots from './dots'
import '../section8Container';

export default class RightPar extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="">
				<div className>
					<Carousel SubtitleJSON={this.props.Section8JSON}/>
				</div>
				<Dots DotsJSON={this.props.Section8JSON}/>
			</div>
		)
	}
}

