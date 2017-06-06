import React from 'react';
import '../styles/index.scss';
import SectionContainer1 from './components/section1/sectionContainer1';
import Section2Container from './components/section2/section2_container';

export default class App extends React.Component {
  render() {
    return (
      <div>
				<SectionContainer1 />
        <Section2Container />
      </div>
    )
  }
}
