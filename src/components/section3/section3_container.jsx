import React, {Component} from 'react'
import Section3Checklist from './section3_checklist';
import Section3Images from './section3_images';

class Section3Container extends  React.Component {


    render() {
        return (
            <div className="section3">
                <div className="page-section-3">
                    <div className="page-container d-flex flex-xl-row flex-sm-column justify-content-lg-around">
                    <Section3Checklist />
                    <Section3Images />
                    </div>
                </div>
            </div>
        );
    }
}

export default  Section3Container;