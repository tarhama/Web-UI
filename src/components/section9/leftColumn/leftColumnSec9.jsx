import React, { Component } from 'react';
import *as data from '../../../store/dataSection9';
import './leftColumnSec9.scss';

class LeftColumnSec9 extends Component {
  render() {
    //const title = data.column.find(col => col.id === 1);
    const logo = require('../../../../assets/images/circle-check.svg');
    //console.log(data.DataSect9.listImg.url);
    return(
      <div>
        <img src={logo} />
      </div>
    )
  }


}

export default LeftColumnSec9;
