import React from 'react';
import './sectionContainer1.css';


export default class SectionContainer1 extends React.Component {
	render() {
		return(
			<div className="sectionContainer1">
				<div className="sectionContainer1_overlay">
				</div>
				<video className="sectionContainer1_video" autoPlay loop muted>
					<source
						src="http://cdn2.editmysite.com/videos/landing-pages/global/home/masthead/masthead-720.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
		)
	}
};
