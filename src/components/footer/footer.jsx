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
			footerDataJson:null,
			footerArray: null
		};
	}

	componentWillMount(){
		SelectedSection('Footer').then((result)=>{
			this.setState({
				footerDataJson:result.data.Lists.Links,
				footerArray: result.data.Lists.List
			})
		});
	}

	render() {
		const footerList = this.state.footerArray ? (
			<FooterList footerListJSON={this.state.footerArray} />
		) : null;

		const footerNavbar = this.state.footerDataJson ? (
			<FooterNavbar footerNavbarJSON={this.state.footerDataJson} />
		): null;

		return (
			<div className="footer">
				<div className="container">
					{footerList}
					{footerNavbar}
				</div>
			</div>
		)
	}
}
