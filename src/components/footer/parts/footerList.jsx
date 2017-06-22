import React from 'react';

import './footerList.css';
import '../footer';

export default class FooterList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			footerListData: this.props.footerListJSON,
			footerDataLength: this.props.footerListJSON.length
		};
		this.footerList = this.footerList.bind(this);
		this.listRender = this.listRender.bind(this);
	}

	footerList() {

		var footerListArray = [];

		for (let i = 0; i < this.state.footerDataLength; i++) {
			let testObj =
				<span className="flex pl-2 pr-2">
						<ul className="footer_list">
							{this.listRender(i)}
						</ul>
				</span>;
			footerListArray.push(testObj)
		}
		return footerListArray
	}

	listRender(value) {
		const ListRender = this.state.footerListData[value].map((object) => (
			<li key={object}>{object}</li>
		));
		return ListRender;
	}

	render() {
		return (
			<div>
				<div className="footer_listContnet ml-3 mr-3 row">
					{this.footerList()}
				</div>
			</div>
		)
	}
}