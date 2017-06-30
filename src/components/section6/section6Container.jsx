import React, {Component} from 'react';

import GeneralBtn from './../../components/buttons/generalBtn';
import LinkBtn from './../../components/buttons/linkBtn';
import Title from '../titleSubtitle/title'

import './section6Container.scss';

class Section6Container extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const divStyle = {
			display: "inline-grid",
			alignItems: "center",
			paddingLeft: 0,
			paddingRight: 0,
			margin: 'auto',
			marginBottom: '-25%'
		};

		const videoLink = "//cdn2.editmysite.com/videos/landing-pages/global/home-weebly4/v2/cs/cs.mp4";
		return (
			<div className="containerSec6">
				<video className="videoSec6" ref={video => this.video = video}
							 playsInline autoPlay muted loop>
					<source src={videoLink} type="video/mp4"/>
				</video>
				<div className="Container">
					<div className="row">
						<div style={divStyle}>

							<Title
								titleText={this.props.Section6JSON.title}
								subTitle={this.props.Section6JSON.text}
							/>

							{/*<TextContent ContentJSON = {this.props.Section6JSON} />*/}
							<div className="pt-4 d-flex align-items-center justify-content-center">
								<GeneralBtn style='filled' btnText="Get Started"/>
								<LinkBtn btnText="More Info"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Section6Container;
