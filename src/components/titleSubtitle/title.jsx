import React from 'react';

import Subtitle from './subtitle'
import './title.css'

const title = (props) => {

	const titleStyle = {
		color: props.color ? '#000000' : '#ffffff',
		textAlign: props.center ? props.center : 'center'
	};

	const title = <h1 className="titleClass" style={titleStyle}>{props.titleText}</h1>;

	const subtitle = props.subTitle ?
		<Subtitle
			subTitle = {props.subTitle}
			subTitleColor={props.subTitleColor}
			center = {props.center}
		/> : null;

	return (
		<div>
			{title}
			{subtitle}
		</div>
	)
};

export default title;
