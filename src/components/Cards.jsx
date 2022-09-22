import React from "react";
import Card from "./Card";
import "./Cards.css"
import { products } from "../menuList";

function Cards(props) {
    return (
        <main className="Cards">
            {
                products.map((key,i) => {
                    return (
                        <Card
                            key = {i}
                            cardImage = {key.img}
                            cardTitle = {key.name}
                            cardDescription = {key.description}
                            cardPrice = {key.price}
                            cardWeight = {key.weight}
                        />
                    )}
                )
            }
        </main>
    );
}

export default Cards;