import React from 'react';
import '../styles/index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SectionContainer1 from './components/section1/sectionContainer1';
import {Section5Container} from "./components/section5/section5Container";
import NavbarComponent from './components/navbar/navbarComponent';
import Section2Container from './components/section2/section2_container';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<NavbarComponent />
				<SectionContainer1 />
				<Section2Container />
				<Section5Container />
			</div>
		)
	}
}
