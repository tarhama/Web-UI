import React from 'react';
import '../styles/index.scss';
// import '../styles/bootstrap.min.css'
// import {Bootstrap} from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SectionContainer1 from './components/section1/sectionContainer1';
import {Section5Container} from "./components/section5/section5Container";

export default class App extends React.Component {
  render() {
    return (
      <div>
				<SectionContainer1 />
				<Section5Container/>
      </div>
    )
  }
}
