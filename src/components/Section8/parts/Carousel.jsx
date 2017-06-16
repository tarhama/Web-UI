import React from 'react'

import * as data from '../../dataComponent5';
import './Carousel.css'

import sec8Emitter from '../section8Emitter';

export default class Carousel extends React.Component {

	constructor() {
		super();

		this.state = {
			sliderId: 0,
			class: ''
		}
	};

	componentWillMount() {
		this.subtitle = data.section8Json.subtitle;

		let Subscription = sec8Emitter.addListener('changeId', (index) => {

			this.setState({
				class: 'hideCarouse'
			});

			setTimeout(() => {
				this.setState({
					sliderId: index,
				});
			}, 1000);

			setTimeout(() => {
				this.setState({
					class: 'showCarouse'
				});
			}, 750);
		})
	}

	render() {
		return (
			<div className={this.state.class}>
				<h3 dangerouslySetInnerHTML={{__html: this.subtitle}}/>
				<h2 className="h2">{data.section8Json.slider[this.state.sliderId].quotation}</h2>
				<h4 className="h4">{data.section8Json.slider[this.state.sliderId].speaker}</h4>
			</div>
		)
	}
}

