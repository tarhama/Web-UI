import React from 'react';
import './../../../styles/buttons/buttons.css';
import './../../../styles/buttons/transparent_button.scss';

const GeneralBtn = (props) => {

    const btnText = props.btnText;
    const style = props.style;

    const blue = {
        color: 'white',
        backgroundColor: '#2990ea',
    };

    const blue_reverse = {
        color: '#2990ea',
        backgroundColor: 'white',
    };


    if (style === 'filled') {
        return (
            <div className="button">
                <a className="btn">{btnText}</a>
            </div>
        )
    }
    else {
        return (
            <div className="section2-btn">
                <a
                    href="/themes/#vertical/portfolio"
                    className="btn-featured">
                    {btnText}
                </a>
            </div>
        )
    }



};

export default GeneralBtn;
