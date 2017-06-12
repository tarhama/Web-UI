import React from 'react';

import './section5Container.css';
import SectionContent5 from './parts/sectionContent5';
import * as Data from '../dataComponent5';

export class Section5Container extends React.Component {

	constructor() {
		super();

		this.state = {
			transform: 'translateY(9.74089vh) rotate(16.5389deg)',
			transitionDuration: '0.6s',
		};
		this.handleScroll = this.handleScroll.bind(this);
		this.renderImgTags = this.renderImgTags.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillMount() {
		this.titleSection5 = Data.dataComponent5.titleSection5;
		this.headingSection5 = Data.dataComponent5.headingSection5;
		this.btnSection5 = Data.dataComponent5.btnSection5;
		this.apple = Data.dataComponent5.apple;
		this.google = Data.dataComponent5.google;
	}

	handleScroll(event) {
		let scrollTop = event.srcElement.body.scrollTop;
		let pageHaight = event.srcElement.body.clientHeight;

		const scroll = (pageHaight - scrollTop) / (pageHaight);

		this.setState({
			height: scrollTop + 'px',
			transform0: 'translateY(' + ((scroll - 0.4) * 200) + 'vh) rotate(' + ((scroll - 1) * (-30)) + 'deg)',
			transform1: 'translateY(' + ((scroll - 0.1) * 120) + 'vh) rotate(' + (scroll * (-15)) + 'deg)',
			transform2: 'translateY(' + ((scroll - 0.2) * 150) + 'vh) rotate(' + (scroll * (-15)) + 'deg)',
			transform3: 'translateY(' + ((scroll - 0.7) * 70) + 'vh) rotate(' + ((scroll - 0.5) * (-25)) + 'deg)',
		})
	}

	renderImgTags(ObjTest) {
		const ImgAtr = {
			transform: `${this.state.transform0}`,
			transitionDuration: `${this.state.transitionDuration}`,
		};

		arrayOfImgStyles = [
			{
				transform: `${this.state.transform0}`,
				transitionDuration: `${this.state.transitionDuration}`,
			}
		];
	}

	render() {
		const atributes = [
			{
				transform: `${this.state.transform0}`,
				transitionDuration: `${this.state.transitionDuration}`,
			},
			{
				transform: `${this.state.transform1}`,
				transitionDuration: `${this.state.transitionDuration}`,
			},
			{
				transform: `${this.state.transform2}`,
				transitionDuration: `${this.state.transitionDuration}`,
			},
			{
				transform: `${this.state.transform3}`,
				transitionDuration: `${this.state.transitionDuration}`,
			},
		];

		const arrayOfImage = Data.myobject.map((obj, index) => (
			<div className={'mobile-item hidden-md-down ' + obj.className}
					 style={atributes[index]}
					 key={obj.id}>
				<img
					className="home-apps-img"
					src={obj.url}/>
			</div>
		));
		return (
			<div className="Section5Container">
				<div className="section5-container">
					<div className="container">
						<SectionContent5
							titleSection5={this.titleSection5}
							headingSection5={this.headingSection5}
							btnSection5={this.btnSection5}
							apple={this.apple}
							google={this.google}
						/>
					</div>
					{arrayOfImage}
				</div>
			</div>
		)
	}
}



