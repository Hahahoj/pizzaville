import "./Card.css";
// import { useDispatch } from "react-redux"

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

export default function Card(props) {
    let cardWeightConverted = props.cardWeight;
    if (isNumber(props.cardWeight)) {
        cardWeightConverted = cardWeightConverted + " г.";
    };
    let cardURLConverted = "../Images/Menu/" + props.cardImage;

    let cardPriceConverted = props.cardPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    // const dispatch = useDispatch();

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
                <div onClick={() => props.handleAdd(props.cardPrice)} className="CardButton"></div>
            </div>
        </div>
    );
}

