import React from 'react';
import './../../../styles/buttons/buttons.css';


const LinkBtn = (props) => {
    return (
        <div className="button">
            <a className="link-btn" style={props.style}>{props.btnText}</a>
        </div>
    );
};

export  default LinkBtn;