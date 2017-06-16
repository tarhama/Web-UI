import React from 'react';
import './section3Btns.css';

const GeneralBtn = (props) => {
    return (
        <div className="button">
            <a className="btn" style={props.style}>{props.btnText}</a>
        </div>
    );
};

export default GeneralBtn;