import React, { Component } from 'react';
import * as data from '../../../store/dataSection6';
import './textContent.scss';

class TextContent extends Component {
  render() {
    return(
      <div className="textSec6">
        <h1>{data.DataSec6.title}</h1>
        <p>{data.DataSec6.text}</p>
      </div>
    )
  }
}

export default TextContent;
