import React, {Component} from 'react';

import GeneralBtn from './../buttons/generalBtn';
import LinkBtn from './../buttons/linkBtn';
import './section4_main.css';
import ChecklistItem from './../section3/parts/checklistItem';
import Title from '../titleSubtitle/title'

const btnStyleWhite = {
	color: 'white',
};

class Section4Checklist extends Component {
	constructor(props) {
		super(props);

		this.state = {
			texts: this.props.data.checklistTexts,
			title: this.props.data.title,
			btnText: this.props.data.buttons.btn_text,
			btn_link_text: this.props.data.buttons.btn_link_text,
		};
	}

	render() {
		const {texts, title, btnText, btn_link_text} = this.state;

		return (
			<div className="page-content transform-X d-inline-flex justify-content-center align-content-center">
				<div className="page-width">
					<div className="d-flex justify-content-center">
						<Title
							titleText={title}
							center={'left'}
						/>
					</div>
					<ul id="checklist-section3" className="checklist">
						{texts.map((textItem, index) =>
							<ChecklistItem ff={textItem} key={index}/>
						)
						}
					</ul>
					<div className="pt-4 d-flex">
						<GeneralBtn style='filled' btnText={btnText}/>
						<LinkBtn style={btnStyleWhite} btnText={btn_link_text}/>
					</div>
				</div>
			</div>
		);
	}
}

export  default Section4Checklist;



