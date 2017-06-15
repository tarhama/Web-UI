import React, { Component } from 'react';
import TextContent from './textContent/textContent';
import ButtonSec6 from './buttons/buttonSec6';
import './section6Container.scss';

class Section6Container extends Component {
  render() {
    return(
      <div className="containerSec6">
        <video className="videoSec6" ref={video => this.video = video} playsInline autoPlay muted loop>
          <source src="//cdn2.editmysite.com/videos/landing-pages/global/home-weebly4/v2/cs/cs.mp4"
                  type="video/mp4"/>
        </video>
        <div className="Container">
        <TextContent />
        <ButtonSec6 />       
        </div>
      </div>
    )
  }
}

export default Section6Container;
