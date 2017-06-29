import React from 'react';

import './section8Container.css'
import  RightPart from './parts/rightPart';
import  LeftPart from './parts/leftPart';

export default class Section8Container extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			Section8JSON: this.props.Section8JSON
		}
	}

	render() {
		return(
			<div className="container-fluid p-0 section8Container">
				<div className="row">
					<div className="col-md-6 vCenter">
						<LeftPart Section8JSON = {this.state.Section8JSON}/>
					</div>
					<div className="col-md-6 vCenter whitebg">
						<RightPart Section8JSON = {this.state.Section8JSON}/>
					</div>
				</div>
			</div>
		)
	}
}
