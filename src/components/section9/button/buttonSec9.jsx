import React from 'react';
import * as data from '../../../store/dataSection9';
import './buttonSec9.scss';

const ButtonSec9 = () => {
  return(
    <div>
      <button type="button"
              className="buttonSec9">
        {data.DataSect9.button}
      </button>
    </div>
  );
}

export default ButtonSec9;
