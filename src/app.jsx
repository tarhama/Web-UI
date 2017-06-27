import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import NavbarComponent from './components/navbar/navbarComponent';
import SectionContainer1 from './components/section1/sectionContainer1';
import Section2Container from './components/section2/section2_container';
import Section3Container from './components/section3/section3_container'
import Section4Container from './components/section4/section4_container'
import Section5Container from "./components/section5/section5Container";
import Section6Container from './components/section6/section6Container';
import Section7Container from './components/Section7/section7Container';
import Section8Container from './components/Section8/section8Container';
import Section9Container from './components/section9/section9Container';
import Footer from './components/footer/footer';
import {SelectedSection} from './components/serviceComponent';

export default class App extends React.Component {

	constructor() {
		super();

		this.state = {
			NavbarJson: null,
			Section1JSON: null,
			Section2JSON: null,
			Section3JSON: null,
			Section4JSON: null,
			Section5JSON: null,
			Section6JSON: null,
			Section7JSON: null,
			Section8JSON: null,
			Section9JSON: null,
			Footer: null
		};
	}


	componentWillMount() {
		SelectedSection().then((result) => {
			this.setState({
				NavbarJson: null,
				Section1JSON: null,
				Section2JSON: null,
				Section3JSON: null,
				Section4JSON: null,
				Section5JSON: result.data.Section5,
				Section6JSON: null,
				Section7JSON: null,
				Section8JSON: result.data.Section8,
				Section9JSON: null,
				FooterJSON: result.data.Footer
			})
		});
	}

	render() {

		const section8 = this.state.Section8JSON ? (
			<Section8Container Section8JSON={this.state.Section8JSON}/>
		) : null;

		const section5 = this.state.Section5JSON ? (
			<Section5Container Section5JSON={this.state.Section5JSON}/>
		) : null;

		const footer = this.state.Section8JSON ? (
			<Footer FooterJSON={this.state.FooterJSON}/>
		) : null;

		return (
			<div>
				<NavbarComponent />
				<SectionContainer1/>
				<Section2Container />
				<Section3Container />
				<Section4Container />
				{section5}
				<Section6Container />
				<Section7Container />
				{section8}
				<Section9Container />
				{footer}
			</div>
		)
	}
}
