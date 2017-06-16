import React, {Component} from 'react';
import GeneralBtn from './../section3/parts/generalBtn';
import LinkBtn from './../section3/parts/linkBtn';
import * as data from '../../store/dataSection4';
import './section4_main.css';


const btnStyleGreen = {
    color: '#56d090',
    backgroundColor: 'white',
};

const btnStyleWhite = {
    color: 'white',
};

class Section4Checklist extends Component {
    constructor() {
        super();

        this.state = {
            texts: data.DataSect4.checklistTexts,
            scrollTop: 0,
        };
    }

    renderList(text) {
        return(
            <div className="d-flex" key={String(text.id)}>
                <div className="li_image"></div>
                <li className="mb-4"><span><strong>{text.boldText}</strong> {text.text}</span></li>
            </div>
        )
    }


    render() {
        const {texts} = this.state;

        return (
            <div className="page-content transform-X d-inline-flex justify-content-center align-content-center">
                <div className="page-width">
                    <div className="d-flex justify-content-center">
                        <h2 className="page-title">{data.DataSect4.title}</h2>
                    </div>
                    <ul id="checklist-section3" className="checklist">
                        {texts.map(this.renderList)}
                    </ul>
                    <div className="pt-4 d-flex">
                        <GeneralBtn  style={btnStyleGreen} btnText={data.DataSect4.buttons.btn_text}/>
                        <LinkBtn  style={btnStyleWhite} btnText={data.DataSect4.buttons.btn_link_text}/>
                    </div>
                </div>

            </div>
        );
    }
}


export  default Section4Checklist;



