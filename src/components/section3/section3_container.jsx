import React, {Component} from 'react'
import Section3Checklist from './section3_checklist';
import Section3Images from './section3_images';
import '../../app'

const Section3Container = (props) => {

    const data = props.Section3JSON;
    const images = props.Section3JSON.images;

return(

            <div className="section3">
                <div className="page-section-3">
                    <div className="page-container d-flex flex-xl-row flex-sm-column justify-content-lg-around">
                    <Section3Checklist data={data}/>
                    <Section3Images images={images}/>
                    </div>
                </div>
            </div>
    )
};

export default  Section3Container;