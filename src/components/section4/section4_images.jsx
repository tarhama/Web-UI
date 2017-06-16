import React, {Component} from 'react';
import * as data from '../../store/dataSection4';
import './section4_main.css';
import RenderImage from './../section3/parts/renderImages';

class Section4Images extends Component {
    constructor() {
        super();

        this.state = {
            image: data.DataSect4.images,
            scrollTop: 0,
        };
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="image-wrapper relative">
                    <RenderImage dataImage={this.state.image}/>
                </div>
            </div>
        );
    }
}


export  default Section4Images;