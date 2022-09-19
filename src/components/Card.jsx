import React from "react";
import "./Card.css"

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

function Card(props) {
    let cardWeightConverted = props.cardWeight;
    if (isNumber(props.cardWeight)) {
        cardWeightConverted = cardWeightConverted + "г.";
    };
    return (
        <div className="Card">
            <img className="CardImage" src={props.cardImage} alt="Изображение товара" />
            <h2 className="CardTitle">{props.cardTitle}</h2>
            <p className="CardDescription">{props.cardDescription}</p>
            <div className="CardProperties">
                <div>
                    <span className="CardPrice">{props.cardPrice} р. / </span>
                    <span className="CardWeight">{cardWeightConverted}</span>
                </div>
                <div className="CardButton">
                </div>
            </div>
        </div>
    );
}

export default Card;