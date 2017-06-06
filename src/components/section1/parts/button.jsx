import React from 'react';
import './button.css';

const Button = (props) => {
	return(
		<div>
			<button type="button" onClick={props.changeBackground}>Click Me!</button>
		</div>
	);
};
export default Button;
