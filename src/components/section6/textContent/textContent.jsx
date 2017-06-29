import React, {Component} from 'react';
import './textContent.scss';

class TextContent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="textSec6">
				<h1>{this.props.ContentJSON.title}</h1>
				<p>{this.props.ContentJSON.text}</p>
			</div>
		)
	}
}

export default TextContent;
