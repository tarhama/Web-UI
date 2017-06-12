import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import SectionContainer1 from './components/section1/sectionContainer1';
import {Section5Container} from "./components/section5/section5Container";
import NavbarComponent from './components/navbar/navbarComponent';
import Section2Container from './components/section2/section2_container';
import Section7Container from './components/Section7/section7Container';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<NavbarComponent />
				<SectionContainer1 />
				<Section2Container />
				<Section5Container />
				<Section7Container />
			</div>
		)
	}
}
