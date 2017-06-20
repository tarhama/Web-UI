import React from 'react';

import './section5Container.css';
import SectionContent5 from './parts/sectionContent5';

import {SelectedSection} from '../serviceComponent'

export default class Section5Container extends React.Component {

	constructor() {
		super();

		this.state = {
			transform: 'translateY(9.74089vh) rotate(16.5389deg)',
			transitionDuration: '0.6s',
			titleSection5: null,
			headingSection5: null,
			btnSection5: null,
			apple: null,
			google: null,
			images: null,
		};
		this.handleScroll = this.handleScroll.bind(this);
		this.renderImgTags = this.renderImgTags.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillMount() {
		SelectedSection('Section5').then((result) => {
			this.setState({
				titleSection5: result.data.titleSection5,
				headingSection5: result.data.headingSection5,
				btnSection5: result.data.btnSection5,
				apple: result.data.apple,
				google: result.data.google,
				images: result.data.Images
			})
		});
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

		const arrayOfImage = this.state.images? (
			this.state.images.map((obj, index) => (
				<div className={'mobile-item hidden-md-down ' + obj.className}
						 style={atributes[index]}
						 key={obj.id}>
					<img
						className="home-apps-img"
						src={obj.url}/>
				</div>
			))
		):null;

		const section5 = this.state.google ? (
			<SectionContent5
				titleSection5={this.state.titleSection5}
				headingSection5={this.state.headingSection5}
				btnSection5={this.state.btnSection5}
				apple={this.state.apple}
				google={this.state.google}
			/>
		): null;

		return (
			<div className="Section5Container">
				<div className="section5-container">
					<div className="container">
						{section5}
					</div>
					{arrayOfImage}
				</div>
			</div>
		)
	}
}



