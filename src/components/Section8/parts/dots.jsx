import React from 'react'

import * as data from '../../dataComponent5';
import './dots.css'
import Fadot from 'react-icons/lib/fa/circle';

import sec8Emitter from '../section8Emitter';

export default class Dots extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			speaker: '',
		};

		this.setFilter = this.setFilter.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	componentWillMount() {
		this.setState({
			speaker: 'Vanessa'
		});

	}

	onClick(data, keyId) {
		this.setFilter(data);
		this.handleClick(keyId);
	}

	handleClick = (keyId) => {
		sec8Emitter.emit('changeId', keyId);
	};

	setFilter(speaker) {
		this.setState({
			speaker: speaker
		});
	}

	isActive(value) {
		return ((value === this.state.speaker) ? 'active' : '')
	};

	render() {
		const addFaDots = data.section8Json.slider.map((obj, index) => (
			<Fadot key={index}
						 size="15px"
						 className={this.isActive(obj.speaker)}
						 onClick={() => this.onClick(obj.speaker, index) }
			/>
		));

		return (
			<div className="dots">
				{addFaDots}
			</div>
		)
	}
}

