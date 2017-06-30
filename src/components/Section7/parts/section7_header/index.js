import React from 'react';

import PropTypes from 'prop-types';
import './index.scss';
import Title from '../../../titleSubtitle/title'

const Section7Header = (props, {scrollFade}) => {
	const fadeInUntil = 300;
	const fadeOpacity = scrollFade / fadeInUntil;
	const fadeStyle = {
		opacity: `${fadeOpacity}`,
		transform: 'opacity 0.3s ease-in'
	};
	return (
		<div className="section7-header" style={fadeStyle}>
			<Title
				titleText={props.titleJSON.title}
				color={'gray'}
				subTitleColor={'gray'}
				subTitle={props.titleJSON.subtitle}
			/>
		</div>
	);
};

Section7Header.propTypes = {
	scrollFade: PropTypes.number,
};

export default Section7Header;
