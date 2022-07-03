import React from "react";

function AboutUs (props) {

    return (
        <div>
            <h3>About us - {props.text}</h3>
            <ul>
                <li>{props.product.id}</li>
                <li>{props.product.color}</li>
                <li>{props.product.number}</li>
            </ul>
        </div>
    )
}



export default AboutUs;