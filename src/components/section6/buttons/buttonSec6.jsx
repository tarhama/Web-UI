import React, { Component } from 'react';
import * as data from '../../../store/dataSection6';
import './buttonSec6.scss';

class ButtonSec6 extends Component {
  render() {

    const btnLeft = data.DataSec6.buttons.find(btn => btn.id === 1).name;
    const btnRight = data.DataSec6.buttons.find(btn => btn.id === 2).name;

    return(
      <div className="buttonSec6">
        <button type="button"
                className="btnLeftSec6">{btnLeft}</button>
        <a href className="btnRightSec6">{btnRight}</a>
      </div>
    );
  }
}

export default ButtonSec6;
