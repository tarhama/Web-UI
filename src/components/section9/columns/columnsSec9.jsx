import React, { Component } from 'react';
import *as data from '../../../store/dataSection9';
import './ColumnsSec9.scss';

class ColumnsSec9 extends Component {

  render() {
    const titleLeft = data.DataSect9.columns.find(col => col.id === 1).title;
    const titleCenter = data.DataSect9.columns.find(col => col.id === 2).title;
    const titleRight = data.DataSect9.columns.find(col => col.id === 3).title;

    const listLeft = data.DataSect9.columns.find(col => col.id === 1).list;
    const listCenter = data.DataSect9.columns.find(col => col.id === 2).list;
    const listRight = data.DataSect9.columns.find(col => col.id === 3).list;

    const myList = (name, index) => {
      let li = <li key={index}>{name.name}</li>;
        return li;
    };

    const listUl = (x) => (
      x.map((name, index) => {
        return myList(name, index);
      })
    );
    
    const logo = require('../../../../assets/images/circle-check.svg');

    return(
      <div className="container columns">
        <div className="column">
          <div className="columnHeader">
            <img src={logo} />
            <h3 className="titleSec9">{titleLeft}</h3>
          </div>
          <ul className="listContent">
            {listUl(listLeft)}
          </ul>
        </div>
        <div className="column">
          <div className="columnHeader">
            <img src={logo} />
            <h3 className="titleSec9">{titleCenter}</h3>
          </div>
          <ul className="listContent">
            {listUl(listCenter)}
          </ul>
        </div>
        <div className="column">
          <div className="columnHeader">
            <img src={logo} />
            <h3 className="titleSec9">{titleRight}</h3>
          </div>
          <ul className="listContent">
            {listUl(listRight)}
          </ul>
        </div>
      </div>
      )
  }
}

export default ColumnsSec9;
