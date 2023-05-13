import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"; //library
import "react-lazy-load-image-component/src/effects/blur.css";  // from library

const Img = ({ src, className }) => {
    return (
        <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"  //opacity or blur
            src={src}
        />
    );
};

export default Img;