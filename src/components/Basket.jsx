import { useSelector } from "react-redux";
import "./Basket.css"
import BasketCard from "./BasketCard"

export default function Basket(props) {
    const basket = useSelector(state => state.basket.basket);
    console.log("basket=",basket);
    console.log("b0=",basket[0]);
    console.log(basket.length);

    return (
        <main className="Order">
            {
                basket.map((key,i) => {
                    return (
                        <BasketCard 
                            key = {i}
                            itemId = {key.itemId} 
                            productID = {key.productID}
                            cardImage = {key.cardImage}
                            cardTitle = {key.cardTitle}
                            cardDescription = {key.cardDescription}
                            cardPrice = {key.cardPrice}
                            cardWeight = {key.cardWeight}
                        />
                    )}
                )
            }
            <div className = "lineBreak"></div>
        </main>
    );
}
