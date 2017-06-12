import React, { Component } from 'react';
import *as data from '../../../store/dataSection9';
import './leftColumnSec9.scss';

class LeftColumnSec9 extends Component {
  render() {
    const title = data.DataSect9.columns.find(col => col.id === 1).title;
    const list = data.DataSect9.columns.find(col => col.id === 1).list;
    
    const listUl = list.map((name, index) => {
      return this.myList(name, index)
    })
    
    const logo = require('../../../../assets/images/circle-check.svg');
    
    return(
      <div className="column">
        <div className="columnHeader">
          <img src={logo} />
          <h3 className="titleSec9">{title}</h3>
        </div>
        <div className="listContent">
          {listUl}
        </div>
      </div>
    )
  }

  myList(name, index) {
    return(
      <li key={index}>{name.name}</li>
    )
  }
}

export default LeftColumnSec9;
