import React from 'react';

import './subtitle.css'

const subTitle = (props) => {

	const subTitleStyle = {
		color: props.subTitleColor === 'gray' ? '#666c70' : '#ffffff',
		textAlign: props.center ? props.center : 'center'
	};

	return (
		<h2 className="subTitleClass" style={subTitleStyle} >
			{props.subTitle}
		</h2>
	)
};

export default subTitle;
