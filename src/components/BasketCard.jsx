import "./BasketCard.css";
import { useDispatch } from "react-redux"
import { delProductInBasket } from "../store/reducers/basket.js"
import { useNavigate } from "react-router-dom";

export default function BasketCard(props) {
    let cardURLConverted = "../Images/Menu/" + props.cardImage;
    let cardPriceConverted = props.cardPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    const dispatch = useDispatch();

    const handleDel = () => {
        dispatch(delProductInBasket(props.itemId));
    } 

    const navigate = useNavigate();
    console.log("render=",props);

    return (
        
        <div className="basketCard">
            <div onClick = { () => navigate( "/" + (props.productID))} >
                <img className="bCardImage" src={cardURLConverted} alt="Изображение товара" />
            </div>
            <h2 className="bCardTitle">{props.cardTitle}</h2>
            <p className="bCardPrice">{cardPriceConverted} ₽</p>
            <button onClick={handleDel} className="bCardButton"></button>
        </div>
        
    );
}

