import React from 'react';

import './section8Container.css'
import  RightPart from './parts/rightPart';
import  LeftPart from './parts/leftPart';
import Dots from './parts/Dots'

export default class Section8Container extends React.Component {

	constructor() {
		super();
	}


	render() {
		return(
			<div className="container-fluid p-0 section8Container">
				<div className="row">
					<div className="col-md-6 vCenter">
						<LeftPart/>
					</div>
					<div className="col-md-6 vCenter">
						<RightPart/>

					</div>
				</div>
			</div>
		)
	}
}
