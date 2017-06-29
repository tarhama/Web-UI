import React from 'react'

import './Carousel.css'
import './rightPart'
import sec8Emitter from '../section8Emitter';

export default class Carousel extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			sliderId: 0,
			class: '',
			data: this.props.SubtitleJSON
		}
	};

	componentWillMount() {
		this.subtitle = this.props.SubtitleJSON.subtitle;

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
				<h2 className="h2">{this.state.data.slider[this.state.sliderId].quotation}</h2>
				<h4 className="h4">{this.state.data.slider[this.state.sliderId].speaker}</h4>
			</div>
		)
	}
}

