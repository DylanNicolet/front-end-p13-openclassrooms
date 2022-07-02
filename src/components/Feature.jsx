import React from "react";
import propTypes from "prop-types";

/**
 * components to display features of Argent Bank
 * 
 * @component
 * @example
 * const imageSrc = "../images/icon-chat.png"
 * const title = "You are our #1 priority"
 * const text = "Need to talk to a representative?"
 * @returns (
 *  <Feature imageSrc={imageSrc} title={title} text={text}/>
 * )
 */
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
    /**
     * Source of the image
     */
    imageSrc:propTypes.string,

    /**
     * Title of the feature
     */
    title:propTypes.string,

    /**
     * text content of the feature
     */
    text:propTypes.string
}