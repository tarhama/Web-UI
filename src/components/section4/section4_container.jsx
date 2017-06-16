import React, {Component} from 'react'
import Section3Checklist from './../section3/section3_checklist';
import Section3Images from './../section3/section3_images';
class Section4Container extends  React.Component {


    render() {
        return (
            <div className="section4">
                <div className="page-section-4">
                    <div className="page-container d-flex flex-xl-row flex-sm-column justify-content-lg-around">
                        <Section3Images />
                        <Section3Checklist />
                    </div>
                </div>
            </div>
        );
    }
}

export default  Section4Container;