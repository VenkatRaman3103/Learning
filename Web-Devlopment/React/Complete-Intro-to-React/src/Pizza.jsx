import React from "react";

export const Pizza = ({ heading, description, image, name }) => {
    return (
        <div className="pizza">
            <h1>{heading}</h1>
            <p>{description}</p>
            <img src={image} alt={name} />
        </div>
    );
};
