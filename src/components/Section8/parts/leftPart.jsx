import React from 'react'

import './leftPart.css'
import SoundIcon from './soundIcon';
import * as data from '../../dataComponent5'

import sec8Emitter from './../section8Emitter';

export default class LeftPart extends React.Component {

	constructor() {
		super();

		this.state = {
			videoSrc: 0,
			soundOn: true,
			class: ''
		};

		this.changeChild = this.changeChild.bind(this);
	}

	componentWillMount() {
		sec8Emitter.addListener('changeId', (index) => {
			this.setState({
				class: 'hideVideo'
			});

			setTimeout(() => {
				this.setState({
					videoSrc: index,});
			}, 1000);

			setTimeout(() => {
				this.setState({
					class: 'showVideo' });
			}, 750);

		});
	}

	changeChild() {
		this.setState({
			soundOn: !this.state.soundOn,
		})
	}

	render() {
		const videotag =
			<video className={"section8Video " + this.state.class}
						 controls="false"
						 autoPlay
						 loop
						 muted={this.state.soundOn}
						 poster="image"
						 preload="true"
						 src={data.section8Json.slider[this.state.videoSrc].video}
						 type="video/mp4">
			</video>;
		return (
			<div className="leftPart">
				<SoundIcon onChange={this.changeChild}/>
				{videotag}
			</div>
		)
	}
}
