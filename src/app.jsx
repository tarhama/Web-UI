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

	constructor(props) {
		super(props);

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
				NavbarJSON: result.data.Navbar,
				Section1JSON: null,
				Section2JSON: result.data.Section2,
				Section3JSON: result.data.Section3,
				Section4JSON: result.data.Section4,
				Section5JSON: result.data.Section5,
				Section6JSON: result.data.Section6,
				Section7JSON: result.data.Section7,
				Section8JSON: result.data.Section8,
				Section9JSON: result.data.Section9,
				FooterJSON: result.data.Footer
			})
		});
	}

	render() {

		const navbarComponent = this.state.NavbarJSON ? (
			<NavbarComponent NavbarJSON={this.state.NavbarJSON}/>
		) : null;

		const section2 = this.state.Section2JSON ? (
			<Section2Container Section2JSON={this.state.Section2JSON}/>
		) : null;

		const section3 = this.state.Section3JSON ? (
			<Section3Container Section3JSON={this.state.Section3JSON}/>
		) : null;

		const section4 = this.state.Section4JSON ? (
			<Section4Container Section4JSON={this.state.Section4JSON}/>
		) : null;

		const section5 = this.state.Section5JSON ? (
			<Section5Container Section5JSON={this.state.Section5JSON}/>
		) : null;

		const section6 = this.state.Section6JSON ? (
			<Section6Container Section6JSON={this.state.Section6JSON}/>
		) : null;

		const section7 = this.state.Section7JSON ? (
			<Section7Container Section7JSON={this.state.Section7JSON}/>
		) : null;

		const section8 = this.state.Section8JSON ? (
			<Section8Container Section8JSON={this.state.Section8JSON}/>
		) : null;

		const section9 = this.state.Section8JSON ? (
			<Section9Container Section9JSON={this.state.Section9JSON}/>
		) : null;

		const footer = this.state.Section8JSON ? (
			<Footer FooterJSON={this.state.FooterJSON}/>
		) : null;

		return (
			<div>
				{navbarComponent}
				<SectionContainer1/>
				{section2}
				{section3}
				{section4}
				{section5}
				{section6}
				{section7}
				{section8}
				{section9}
				{footer}
			</div>
		)
	}
}
