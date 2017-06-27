import React from 'react';

import './section5Container.css';
import SectionContent5 from './parts/sectionContent5'
import '../../app';

export default class Section5Container extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			transform: 'translateY(9.74089vh) rotate(16.5389deg)',
			transitionDuration: '0.6s',
			titleSection5: this.props.Section5JSON.titleSection5,
			headingSection5: this.props.Section5JSON.headingSection5,
			btnSection5: this.props.Section5JSON.btnSection5,
			apple: this.props.Section5JSON.apple,
			google: this.props.Section5JSON.google,
			images: this.props.Section5JSON.Images,
		};
		this.handleScroll = this.handleScroll.bind(this);
		this.renderImgTags = this.renderImgTags.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
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

		const arrayOfImage = this.state.images ? (
			this.state.images.map((obj, index) => (
				<div className={'mobile-item hidden-md-down ' + obj.className}
						 style={atributes[index]}
						 key={obj.id}>
					<img
						className="home-apps-img"
						src={obj.url}/>
				</div>
			))
		) : null;

		const section5 =
			<SectionContent5
				titleSection5={this.state.titleSection5}
				headingSection5={this.state.headingSection5}
				btnSection5={this.state.btnSection5}
				apple={this.state.apple}
				google={this.state.google}
			/>;

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
