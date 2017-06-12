import React, { Component } from 'react';
import Data from './dataSection9';

class LeftColumnSect9 extends Component {
  render() {
    return(
      <div>
        <ul>{this.renderList}</ul>
      </div>
    )
  }

  renderList(name) {
    return(
      <li>name.Data.title</li>
    )
  }
console.log(renderList);
}

export default LeftColumnSect9;
