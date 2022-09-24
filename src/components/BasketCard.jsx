import React from "react";
import "./BasketCard.css";

export default function BasketCard(props) {
    let cardURLConverted = "../Images/Menu/" + props.cardImage;
    let cardPriceConverted = props.cardPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return (
        
        <div className="basketCard">
            <img className="bCardImage" src={cardURLConverted} alt="Изображение товара" />
            <h2 className="bCardTitle">{props.cardTitle}</h2>
            <p className="bCardPrice">{cardPriceConverted} ₽</p>
            <div className="bCardButton"></div>
        </div>
        
    );
}

