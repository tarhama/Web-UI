import React, {Component} from 'react';
import * as data from '../../store/dataSection3';
import * as data1 from '../../store/dataSection4';
import './section3_main.css';

class Section3Images extends Component {
    constructor() {
        super();

        this.state = {
            image: data.DataSect3.images,
            image1: data1.DataSect4.images,
            scrollTop: 0,
        };
    }

    renderImages(image) {
        return(

                <div className={"image-items image-transition" + image.className}>
                    <img src={image.src} alt={image.name}/>
                </div>

        )
    }

    render() {
        const {image} = this.state;

        return (
            <div className="d-flex justify-content-center">
                <div className="image-wrapper relative">
            {image.map(this.renderImages)}
                </div>
            </div>
        );
    }
}

export  default Section3Images;



