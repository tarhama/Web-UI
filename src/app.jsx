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

export default class App extends React.Component {

	constructor(){
		super();
	}

	render() {
		return (
			<div>
				<NavbarComponent />
				<SectionContainer1/>
				<Section2Container />
				<Section3Container />
				<Section4Container />
				<Section5Container />
				<Section6Container />
				<Section7Container />
				<Section8Container/>
				<Section9Container />
				<Footer/>
			</div>
		)
	}
}
