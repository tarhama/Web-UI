import React from 'react';
import './index.scss';
import '../../section2_container'

class Section2Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="section2-header">
				<h1 className="title">{this.props.HeaderJSON.header.title}</h1>
				<h2 className="subtitle">{this.props.HeaderJSON.header.subtitle}</h2>
			</div>
		);
	};
}

export default Section2Header;
