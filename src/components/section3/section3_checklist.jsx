import React, {Component} from 'react';
import GeneralBtn from './parts/generalBtn';
import LinkBtn from './parts/linkBtn';
import * as data from '../../store/dataSection3';
import './section3_main.css';


const btnStyleBlue = {
    color: 'white',
    backgroundColor: '#2990ea',
};

const btnStyleGreen = {
    color: '#2990ea',
    backgroundColor: 'white',
};

class Section3Checklist extends Component {
    constructor() {
        super();

        this.state = {
            texts: data.DataSect3.checklistTexts,
            scrollTop: 0,
        };
    }

    renderList(text) {
        return(
            <div className="d-flex">
                <div className="li_image"></div>
                <li className="mb-4" key={String(text.id)}><span><strong>{text.boldText}</strong> {text.text}</span></li>
            </div>

        )
    }


    render() {
        const {texts} = this.state;

        return (
            <div className="page-content transform-X d-inline-flex justify-content-center align-content-center">
                <div className="page-width">
                    <div className="d-flex justify-content-center">
                        <h2 className="page-title">{data.DataSect3.title}</h2>
                    </div>
                    <ul id="checklist-section3" className="checklist">
                        {texts.map(this.renderList)}
                    </ul>
                    <div className="pt-4 d-flex">
                        <GeneralBtn  style={btnStyleBlue} btnText={data.DataSect3.buttons.btn_text}/>
                        <LinkBtn  style={btnStyleGreen} btnText={data.DataSect3.buttons.btn_link_text}/>
                    </div>
                </div>

            </div>
        );
    }
}


export  default Section3Checklist;



