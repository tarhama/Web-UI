import React, {Component} from 'react';
import GeneralBtn from './../section3/parts/generalBtn';
import LinkBtn from './../section3/parts/linkBtn';
import * as data from '../../store/dataSection4';
import './section4_main.css';
import ChecklistItem from './../section3/parts/checklistItem';



const btnStyleGreen = {
    color: '#56d090',
    backgroundColor: 'white',
};

const btnStyleWhite = {
    color: 'white',
};

class Section4Checklist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            texts: data.DataSect4.checklistTexts,
            title: data.DataSect4.title,
            btnText: data.DataSect4.buttons.btn_text,
            btn_link_text: data.DataSect4.buttons.btn_link_text,
            scrollTop: 0,
        };
    }


    render() {
        const {texts, title, btnText, btn_link_text} = this.state;

        return (
            <div className="page-content transform-X d-inline-flex justify-content-center align-content-center">
                <div className="page-width">
                    <div className="d-flex justify-content-center">
                        <h2 className="page-title">{title}</h2>
                    </div>
                    <ul id="checklist-section3" className="checklist">
                        {texts.map((textItem, index) =>
                            <ChecklistItem ff={textItem} key={index} />
                        )
                        }
                    </ul>
                    <div className="pt-4 d-flex">
                        <GeneralBtn  style={btnStyleGreen} btnText={btnText}/>
                        <LinkBtn  style={btnStyleWhite} btnText={btn_link_text}/>
                    </div>
                </div>

            </div>
        );
    }
}


export  default Section4Checklist;



