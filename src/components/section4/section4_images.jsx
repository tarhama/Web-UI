import React, {Component} from 'react';
import './section4_main.css';
import RenderImage from './../section3/parts/renderImages';

class Section4Images extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: this.props.images,
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