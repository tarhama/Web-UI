import React, { Component } from 'react';
import * as data from '../../../store/dataSection9';
import './headerSection9.scss';

class HeaderSection9 extends Component {
  render() {
    return(
      <div>
        <h1 className="headerSec9">{data.DataSect9.title}</h1>
      </div>
    )    
  }  
}

export default HeaderSection9;
