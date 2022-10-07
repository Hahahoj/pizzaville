import "./Card.css";
import { useDispatch } from "react-redux"
import { addProductInBasket } from "../store/reducers/basket.js"

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

export default function Card(props) {

    let cardWeightConverted = props.cardWeight;
    if (isNumber(props.cardWeight)) {
        cardWeightConverted = cardWeightConverted + " г.";
    };
    let cardURLConverted = "../Images/Menu/" + props.cardImage;

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

    return (
        <div className="Card">
            <img className="CardImage" src={cardURLConverted} alt="Изображение товара" />
            <h2 className="CardTitle">{props.cardTitle}</h2>
            <p className="CardDescription">{props.cardDescription}</p>
            <div className="CardProperties">
                <div>
                    <span className="CardPrice">{cardPriceConverted} р. / </span>
                    <span className="CardWeight">{cardWeightConverted}</span>
                </div>
                {/* так onClick работает по старому заданию от 29.09.2022
                <div onClick={() => props.handleAdd(props.cardPrice)} className="CardButton"></div> */}
                <div onClick={handleAdd} className="CardButton"></div>
            </div>
        </div>
    );
}

