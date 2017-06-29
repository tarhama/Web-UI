import React, {Component} from 'react';
import NavbarDropdown from "./navbarDropdown";
import SignupBtn from "./signupBtn";
import "./navbarRightComponent.scss";
import '../navbarComponent'

class NavbarRightComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ul className="navRightComponent">
					<li>
						<NavbarDropdown LanguageJSON={this.props.LanguageJSON}/>
					</li>
					<li><a>log&nbsp;in</a></li>
					<li>
						<SignupBtn changeNavbar={this.props.changeNavbar}
											 shortIcon={this.props.shortIcon}/>
					</li>
				</ul>
			</div>
		)
	}
}

export default NavbarRightComponent;
