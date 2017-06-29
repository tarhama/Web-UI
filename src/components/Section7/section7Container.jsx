import React, { Component } from 'react';
import Section7Header from './parts/section7_header';
import classNames from 'classnames';
import './section7Container.scss';

export default class Section7Container extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bckg: {},
			imgs: [],
			scrollParallax: 0,
			scrollFade: 0,
			images: this.props.Section7JSON.images,
		  bckgImage: this.props.Section7JSON.bckgImage,
		};

		this.handleScrollParallax = this.handleScrollParallax.bind(this);
		this.handleScrollFade = this.handleScrollFade.bind(this);
		this.renderImages = this.renderImages.bind(this);
	}
	componentWillMount() {
		const imgs = this.state.images.map(image => image);
		const bckg = this.state.bckgImage;
		this.setState({ imgs, bckg });
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScrollParallax);
		window.addEventListener('scroll', this.handleScrollFade);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScrollParallax);
		window.removeEventListener('scroll', this.handleScrollFade);
	}
	handleScrollFade() {
		const pageOffsetTop = window.pageYOffset;
		const windowHeight = window.innerHeight;
		const paddingTop = 100;
		const windowHeaderHeight = windowHeight - paddingTop;
		const section7offsetTop = this.section7.offsetTop;
		const section7Height = this.section7.offsetHeight;
		const scrollFade = pageOffsetTop - (section7offsetTop - windowHeaderHeight);
		if (scrollFade > 0 && scrollFade < section7Height) {
			this.setState({ scrollFade });
		}
	}
	handleScrollParallax() {
		const pageOffsetTop = window.pageYOffset;
		const windowHeight = window.innerHeight;
		const headerHeight = 296;
		const windowHeaderHeight = windowHeight - headerHeight;
		const section7offsetTop = this.section7.offsetTop;
		const section7Height = this.section7.offsetHeight;
		const scrollParallax = pageOffsetTop - (section7offsetTop - windowHeaderHeight);
		if (scrollParallax > 0 && scrollParallax < section7Height) {
			this.setState({ scrollParallax });
		}
	}
  renderImages(image) {
		const { scrollParallax } = this.state;
		const imgClass = classNames({
			"section7-parallax": true,
			[`img-${image.title}`]: true,
	  });
		const imgStyle = {
			backgroundImage: `url(http://cdn2.editmysite.com/images/landing-pages/global/home-weebly4/v2/apps/${image.title}.png)`,
			transform: `translate(0px, -${scrollParallax / (image.parallax_delay * 20)}%)`,
		};
		return(
			<div className={imgClass} style={imgStyle} key={String(image.id)}></div>
		);
	}
	render() {
		const { imgs, bckg: { url }, scrollFade } = this.state;
		const bckgStyle = {
			backgroundImage: `url(${url})`,
		};
		return(
			<div
				className="section7-container"
				style={bckgStyle}
				ref={section7 => this.section7 = section7}>
				<Section7Header scrollFade={scrollFade}/>
				{imgs.map(this.renderImages)}
			</div>
		);
	}
}
