import React from 'react';

import './footerList.css';

export default class FooterList extends React.Component {

	constructor(props) {
		super(props);

		this.state ={
			footerListData: this.props.footerListJSON
		};
		//console.log(this.state.footerListData)
	}

	render() {
		return (
			<div>list</div>
		)
	}

}
