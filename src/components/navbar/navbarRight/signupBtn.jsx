import React, { Component } from 'react';
import "./signupBtn.scss";

class SignupBtn extends Component {

  isActive(){
    return 'signupBtn ' + (this.props.changeNavbar ? 'colorBtnWhite' : 'colorBtnBlue');
  }

  render() {
    return(
      <div>
        <button type="button" className={this.isActive()} 
                style={{display: this.props.shortIcon ? 'block' : 'none'}}>
          sign up
        </button>
      </div>
    )
  }
}

export default SignupBtn;
