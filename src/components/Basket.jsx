import "./Basket.css"
import { useSelector } from "react-redux";
import BasketCard from "./BasketCard"

export default function Basket() {
    const basket = useSelector(state => state.basket.basket);

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
        </main>
    );
}
