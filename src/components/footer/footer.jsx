import React from 'react';

import Axios from 'axios';
import {SelectedSection} from '../serviceComponent'

import './footer.css';
import FooterList from './parts/footerList'
import FooterNavbar from './parts/footerNavbar'

export default class Footer extends React.Component {

	constructor() {
		super();

		this.state = {
			footerArray: null
		};
	}

	componentWillMount(){
		SelectedSection('Footer').then((result)=>{
			this.setState({
				footerArray: result.data.Lists.List
			})
		});
	}

	render() {
		const footerList = this.state.footerArray ? (
			<FooterList footerListJSON={this.state.footerArray} />
		) : null;

		return (
			<div className="footer">
				<div className="container">
					{footerList}
					<FooterNavbar />
				</div>
			</div>
		)
	}

}
