import React from 'react';

import './footer.css';
import FooterList from './parts/footerList'
import FooterNavbar from './parts/footerNavbar'

import * as data from '../dataComponent5';

export default class Footer extends React.Component {

	constructor() {
		super();

		this.state = {
			footerDataJson: data.footerJson
		}
	}

	render() {
		return (
			<div className="footer">
				<div className="container">
					<FooterList footerListJSON={this.state.footerDataJson.Lists} />
					<FooterNavbar footerNavbarJSON={this.state.footerDataJson.Lists.Links} />
				</div>
			</div>
		)
	}

}
