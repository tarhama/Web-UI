import React from 'react';

const ImageItem = ({image}) =>

    <div className={"image-items image-transition " + image.className} key={image.name}>
        <img src={image.src} alt={image.name} />
    </div>;

export default  ImageItem
