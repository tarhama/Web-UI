import React from 'react';

import './footer.css';
import FooterList from './parts/footerList'
import FooterNavbar from './parts/footerNavbar'
import '../../app'

export default class Footer extends React.Component {

	constructor(props) {
		super(props);

		console.log(props.FooterJSON.Lists);

		this.state = {
			footerDataJson: this.props.FooterJSON.Lists.Links,
			footerArray: this.props.FooterJSON.Lists.List
		};
	}

	render() {
		return (
			<div className="footer">
				<div className="container">
					<FooterList footerListJSON={this.state.footerArray}/>
					<FooterNavbar footerNavbarJSON={this.state.footerDataJson}/>
				</div>
			</div>
		)
	}
}
