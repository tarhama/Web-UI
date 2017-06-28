import React, {Component} from 'react'
import Section4Checklist from './../section4/section4_checklist';
import Section4Images from './../section4/section4_images';


const Section4Container = (props) => {

    const data = props.Section4JSON;
    const images = props.Section4JSON.images;

    return (
        <div className="section4">
            <div className="page-section-4">
                <div className="page-container d-flex flex-xl-row flex-sm-column justify-content-lg-around">
                    <Section4Images images={images}/>
                    <Section4Checklist data={data} />
                </div>
            </div>
        </div>

    )
};

export default  Section4Container;