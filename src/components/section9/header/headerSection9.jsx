import React, { Component } from 'react';
import './headerSection9.scss';

class HeaderSection9 extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return(
      <div>
        <h1 className="headerSec9">{this.props.HeaderJSON}</h1>
      </div>
    )
  }
}

export default HeaderSection9;
