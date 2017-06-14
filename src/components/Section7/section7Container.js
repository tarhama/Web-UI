import React, { Component } from 'react';
import Section7Header from './parts/section7_header';
import classNames from 'classnames';
import { images, bckgImage } from './section7_store';
import './section7Container.scss';

export default class Section7Container extends Component {
	constructor() {
		super();

		this.state = {
			bckg: {},
			imgs: [],
			scrollTop: 0,
		};
		this.handleScroll = this.handleScroll.bind(this);
		this.renderImages = this.renderImages.bind(this);
	}
	componentWillMount() {
		const imgs = images.map(image => image);
		const bckg = bckgImage;
		this.setState({ imgs, bckg });
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll() {
		const pageOffsetTop = window.pageYOffset;
		const windowHeight = window.innerHeight;
		console.log('window height: ', windowHeight);
		const headerHeight = 296;
		const windowHeaderHeight = windowHeight - headerHeight;
		const section7offsetTop = this.section7.offsetTop;
		const section7Height = this.section7.offsetHeight;
		const scrollTop = pageOffsetTop - (section7offsetTop - windowHeaderHeight);
		if (scrollTop > 0 && scrollTop < section7Height) {
			this.setState({ scrollTop });
		}
	}
  renderImages(image) {
		const { scrollTop } = this.state;
		const imgClass = classNames({
			"section7-parallax": true,
			[`img-${image.title}`]: true,
	  });
		const imgStyle = {
			backgroundImage: `url(http://cdn2.editmysite.com/images/landing-pages/global/home-weebly4/v2/apps/${image.title}.png)`,
			transform: `translate(0px, -${scrollTop / (image.parallax_delay * 20)}%)`,
		};
		return(
			<div className={imgClass} style={imgStyle} key={String(image.id)}></div>
		);
	}
	render() {
		const { imgs, bckg: { url }} = this.state;
		const bckgStyle = {
			backgroundImage: `url(${url})`,
		};
		console.log(bckgStyle);
		return(
			<div
				className="section7-container"
				style={bckgStyle}
				ref={section7 => this.section7 = section7}>
				<Section7Header/>
				{imgs.map(this.renderImages)}
			</div>
		);
	}
}
