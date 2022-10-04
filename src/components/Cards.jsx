import "./Cards.css"
import { products } from "../menuList";
import Card from "./Card";

export default function Cards(props) {
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
                            handleAdd = {props.handleAdd}
                        />
                    )}
                )
            }
        </main>
    );
}
