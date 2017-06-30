import React, {Component} from 'react';

import GeneralBtn from './../buttons/generalBtn';
import LinkBtn from './../buttons/linkBtn';
import './section3_main.css';
import ChecklistItem from './parts/checklistItem';
import Title from '../titleSubtitle/title'


const btnStyleGreen = {
	color: '#2990ea',
	backgroundColor: 'white',
};

class Section3Checklist extends Component {
	constructor(props) {
		super(props);

		this.state = {
			texts: this.props.data.checklistTexts,
			title: this.props.data.title,
			btn_text: this.props.data.buttons.btn_text,
			btn_link_text: this.props.data.buttons.btn_link_text,
		};

	}


	render() {
		const {texts, title, btn_text, btn_link_text} = this.state;
		return (
			<div className="page-content transform-X d-inline-flex justify-content-center align-content-center">
				<div className="page-width">
					<div className="d-flex justify-content-center">
						<Title
							titleText={title}
							color={'gray'}
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
						<GeneralBtn style='filled' btnText={btn_text}/>
						<LinkBtn style={btnStyleGreen} btnText={btn_link_text}/>
					</div>
				</div>

			</div>
		);
	}
}


export  default Section3Checklist;



