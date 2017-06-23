import React, { Component } from 'react';
import DropdownMenu from './dropdownMenu';
import DropdownButton from './dropdownButton';
import './dropdownComponent.scss';

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
   this.isExpanded = this.isExpanded.bind(this);
   this.collapse = this.collapse.bind(this);
  }
 
  isExpanded() {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  collapse() {
    this.setState({
      expanded: true,
    });
  }
  render() {
    // const addClass = () => {
    //   return 'navIcon ' + (!this.props.shortIcon ? 'navIconShow' : 'navIconNone');
    //}

    return(
      <div className="navIcon"
           tabIndex="0"
           onBlur={this.collapse}>
        <DropdownButton isExpanded={this.isExpanded}                        
                        expanded={this.state.expanded}/>
        <DropdownMenu expanded={this.state.expanded}/>
      </div>
    )
  }
}

export default DropdownComponent;
