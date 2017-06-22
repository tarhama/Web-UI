import React from 'react';
import './section3Btns.css';

const GeneralBtn = ({style, btnText}) =>

        <div className="button">
            <a className="btn" style={style}>{btnText}</a>
        </div>;


export default GeneralBtn;