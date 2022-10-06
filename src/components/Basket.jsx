// import { useSelector } from "react-redux";
import "./Basket.css"
import {products} from "../menuList"
import BasketCard from "./BasketCard"

export default function Basket(props) {
    // const basket = useSelector(state => state.basket.basket);
    // console.log("basket=",basket);

    return (
        <main className="Order">
            {
                products.map((key,i) => {
                    return (
                        <BasketCard
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
            <div className = "lineBreak"></div>
        </main>
    );
}
