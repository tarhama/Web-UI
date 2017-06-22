import React, {Component} from 'react';
import GeneralBtn from './parts/generalBtn';
import LinkBtn from './parts/linkBtn';
import * as data from '../../store/dataSection3';
import './section3_main.css';
import ChecklistItem from './parts/checklistItem';


const btnStyleBlue = {
    color: 'white',
    backgroundColor: '#2990ea',
};

const btnStyleGreen = {
    color: '#2990ea',
    backgroundColor: 'white',
};

class Section3Checklist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            texts: data.DataSect3.checklistTexts,
            title: data.DataSect3.title,
            btn_text: data.DataSect3.buttons.btn_text,
            btn_link_text: data.DataSect3.buttons.btn_link_text,
            scrollTop: 0,
        };
    }


    render() {
        const {texts, title, btn_text, btn_link_text} = this.state;

        return (
            <div className="page-content transform-X d-inline-flex justify-content-center align-content-center">
                <div className="page-width">
                    <div className="d-flex justify-content-center">
                        <h2 className="page-title">{title}</h2>
                    </div>
                    <ul id="checklist-section3" className="checklist">
                        {texts.map((textItem, index) =>
                            <ChecklistItem ff={textItem} key={index}/>
                        )
                        }
                    </ul>
                    <div className="pt-4 d-flex">
                        <GeneralBtn style={btnStyleBlue} btnText={btn_text}/>
                        <LinkBtn style={btnStyleGreen} btnText={btn_link_text}/>
                    </div>
                </div>

            </div>
        );
    }
}


export  default Section3Checklist;



