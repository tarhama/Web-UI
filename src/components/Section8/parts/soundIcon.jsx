import React from 'react';

import './soundIcon.css'

import FaVolumeOff from 'react-icons/lib/fa/volume-off';
import FaVolumeUp from 'react-icons/lib/fa/volume-up';
import './leftPart';


export default class SoundIcon extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			volume: false
		};
		this.changeIcon = this.changeIcon.bind(this);
		this.changeChild = this.props.onChange;
	}

		changeIcon() {
		const newVolume = !this.state.volume;
		this.setState({
			volume: newVolume
		});
		this.changeChild();
	}

	render() {
		const faVolumeOff = <FaVolumeOff
			size="100%"
			onClick={this.changeIcon}
		/>;
		const faVolumeUp = <FaVolumeUp
			size="100%"
			onClick={this.changeIcon}
		/>;

		return (
			<div className="volumeBackgroud">
				<div>
					{ this.state.volume ? faVolumeUp : faVolumeOff }
				</div>
			</div>
		)
	}


}
