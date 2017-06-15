import React from 'react'

import './rightPart.css'
import Carousel from './Carousel.jsx';
import Dots from './Dots'

export default class RightPar extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div className="">
				<div className>
					<Carousel/>
				</div>
				<Dots />
			</div>
		)
	}
}

