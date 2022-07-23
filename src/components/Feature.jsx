import React from "react";
import propTypes from "prop-types";

//Components to display features of Argent Bank
export default function Feature(props){
    return(
        <section className="feature">
            <img src={props.imageSrc} alt="" className="feature__icon"/>
            <h3 className="feature__title">{props.title}</h3>
            <p>{props.text}</p>
        </section>
    )
}

Feature.propTypes = {
    //Source of the image
    imageSrc:propTypes.string,

    // Title of the feature
    title:propTypes.string,

    // text content of the feature
    text:propTypes.string
}