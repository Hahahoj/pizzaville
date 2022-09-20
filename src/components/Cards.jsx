import React from "react";
import Card from "./Card";
import "./Cards.css"

function Cards(props) {
    return (
        <main>
            <div className="Cards">
                <Card 
                    cardID="1"
                    cardChoosen="false"
                    cardImage="../Images/Menu/1.png"
                    cardTitle="Устрицы по рокфеллеровски" 
                    cardDescription="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                    cardPrice="2700"
                    cardWeight="500"
                />

                <Card 
                    cardID="2"
                    cardChoosen="false"            
                    cardImage="../Images/Menu/2.png"
                    cardTitle="Свиные ребрышки на гриле с зеленью"
                    cardDescription="Не следует, однако забывать, что реализация намеченных плановых"
                    cardPrice="1600"
                    cardWeight="750"
                />

                <Card 
                    cardID="3"
                    cardChoosen="false"            
                    cardImage="../Images/Menu/3.png"
                    cardTitle="Креветки по-королевски в лимонном соке" 
                    cardDescription="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
                    cardPrice="1820"
                    cardWeight="7 шт."
                />

                <Card 
                    cardID="4"
                    cardChoosen="false"            
                    cardImage="../Images/Menu/4.png"
                    cardTitle="Устрицы по рокфеллеровски"
                    cardDescription="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                    cardPrice="2700"
                    cardWeight="500"
                />
                
                <Card 
                    cardID="5"
                    cardChoosen="false"
                    cardImage="../Images/Menu/1.png"
                    cardTitle="Устрицы по рокфеллеровски" 
                    cardDescription="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                    cardPrice="2700"
                    cardWeight="500"
                />

                <Card 
                    cardID="6"
                    cardChoosen="false"            
                    cardImage="../Images/Menu/2.png"
                    cardTitle="Свиные ребрышки на гриле с зеленью"
                    cardDescription="Не следует, однако забывать, что реализация намеченных плановых"
                    cardPrice="1600"
                    cardWeight="750"
                />

                <Card 
                    cardID="7"
                    cardChoosen="false"            
                    cardImage="../Images/Menu/3.png"
                    cardTitle="Креветки по-королевски в лимонном соке" 
                    cardDescription="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
                    cardPrice="1820"
                    cardWeight="7 шт."
                />

                <Card 
                    cardID="8"
                    cardChoosen="false"            
                    cardImage="../Images/Menu/4.png"
                    cardTitle="Устрицы по рокфеллеровски"
                    cardDescription="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                    cardPrice="2700"
                    cardWeight="500"
                />
            </div>
        </main>
    );
}

export default Cards;