import React from 'react';
import '../styles/index.scss';
import SectionContainer1 from './components/section1/sectionContainer1';
import NavbarComponent from './components/navbar/navbarComponent';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
				<SectionContainer1 />
      </div>
    )
  }
}
