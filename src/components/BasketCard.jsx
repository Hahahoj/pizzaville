import "./BasketCard.css";
import { useDispatch } from "react-redux"
import { delProductInBasket } from "../store/reducers/basket.js"

export default function BasketCard(props) {
    let cardURLConverted = "../Images/Menu/" + props.cardImage;
    let cardPriceConverted = props.cardPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    const dispatch = useDispatch();

    const handleDel = () => {
        console.log(props);
        dispatch(delProductInBasket(props.itemId));
    } 

    return (
        
        <div className="basketCard">
            <img className="bCardImage" src={cardURLConverted} alt="Изображение товара" />
            <h2 className="bCardTitle">{props.cardTitle}</h2>
            <p className="bCardPrice">{cardPriceConverted} ₽</p>
            <div onClick={handleDel} className="bCardButton"></div>
        </div>
        
    );
}

