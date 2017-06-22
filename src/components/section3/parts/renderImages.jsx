import React, {Component} from 'react';
import './../section3_images';
import ImageItem from './renderImage'


const RenderImages = ({dataImage}) => {

    return (
        <div>
            {dataImage.map((image, index) =>
                <ImageItem key={index} image={image}/>)}
        </div>
    );
};


export  default RenderImages;