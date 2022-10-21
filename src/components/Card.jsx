import "./Card.css";
import { useDispatch } from "react-redux"
import { addProductInBasket } from "../store/reducers/basket.js"
import { useNavigate } from "react-router-dom"

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

export default function Card(props) {

    let cardWeightConverted = props.cardWeight;
    if (isNumber(props.cardWeight)) {
        cardWeightConverted = cardWeightConverted + " г.";
    };
    let cardURLConverted = "/pizzaville/Images/Menu/" + props.cardImage;

    let cardPriceConverted = props.cardPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addProductInBasket( { ...props, itemId: uid() }))
    } 

    // генератор уникального ключа
    function uid() {
        let a = new Uint32Array(3);
        window.crypto.getRandomValues(a);
        return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g,"");
    };

    const navigate = useNavigate(); 

    return (
        <div className="Card">
            <div className="CardLink" onClick = { () => navigate( "/pizzaville/" + props.productID)} >
                <img className="CardImage" src={cardURLConverted} alt="Изображение товара" />
                <h2 className="CardTitle">{props.cardTitle}</h2>
                <p className="CardDescription">{props.cardDescription}</p>
            </div>
            <div className="CardProperties">
                <div>
                    <span className="CardPrice">{cardPriceConverted} р. / </span>
                    <span className="CardWeight">{cardWeightConverted}</span>
                </div>
                <div onClick={handleAdd} className="CardButton"></div>
            </div>
        </div>
    );
}

