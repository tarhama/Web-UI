import React, {Component} from 'react'
import Section4Checklist from './../section4/section4_checklist';
import Section4Images from './../section4/section4_images';
class Section4Container extends  React.Component {


    render() {
        return (
            <div className="section4">
                <div className="page-section-4">
                    <div className="page-container d-flex flex-xl-row flex-sm-column justify-content-lg-around">
                        <Section4Images />
                        <Section4Checklist />
                    </div>
                </div>
            </div>
        );
    }
}

export default  Section4Container;