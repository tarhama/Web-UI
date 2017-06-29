import React, { Component } from 'react';
import HeaderSection9 from './header/headerSection9';
import ColumnsSec9 from './columns/columnsSec9';
import GeneralBtn from './../../components/buttons/generalBtn';
import "./section9Container.scss";

class Section9Container extends Component {
	constructor(props){
		super(props);

	}

	render() {
		const btntext = this.props.Section9JSON.button;


		return (
			<div className="section9">
				<div className="container">
					<HeaderSection9 HeaderJSON = {this.props.Section9JSON.title} />
					<ColumnsSec9 ColumnsJSON={this.props.Section9JSON.columns}/>
					<GeneralBtn btnText={btntext}/>
				</div>
			</div>
		)
	}
};

export default Section9Container;
