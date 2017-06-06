import React from 'react';
import './sectionContainer1.css';
import Button from './parts/button';

export default class SectionContainer1 extends React.Component {
	constructor(){
		super();
		this.state = {
			active: false
		};
		this.changeBackground = this.changeBackground.bind(this);
	}
	//function will change current state to opposite, so if the current state is false
	//after execute this function the state will be true
	changeBackground() {
		this.setState({
			active: !this.state.active
		});
	}
	render() {
		return(
			<div className="sectionContainer1">
				<div className={this.state.active ? 'active' : 'unactive'}>
					<Button
						//pass function changeBackground as props to Button component
						changeBackground={this.changeBackground}
					/>
				</div>
			</div>
		)
	}
};
