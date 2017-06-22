import React, { Component } from 'react';

const ChecklistItem = ({ff, index}) => {

    return (
    <div className="d-flex" key={index}>
        <div className="li_image"></div>
        <li className="mb-4"><span><strong>{ff.boldText}</strong> {ff.text}</span></li>
    </div>
    )};


export default ChecklistItem;