import "./Header.css"
import icon from "../Images/Header/icon.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ButtonToLog from "./ButtonToLog";

export default function Header(props) {
    const basket = useSelector(state => state.basket.basket);
    let inCart = basket.length;
    if (inCart > 100) { inCart = inCart % 100; }
    if (inCart > 20) { inCart = inCart % 10; }
    const spelling = ` товар${inCart===0 ? "ов" : inCart===1 ? "" : inCart<5 ? "а" :inCart<21 ? "ов" : ""} `
    let cartPrice=0;
    basket.forEach(element => { 
        cartPrice=cartPrice+(+element.cardPrice)
    });
    let summaryConverted = cartPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return (
        <header className="Row-markup">
            <div>
                <h1 className="Page-title">Наша продукция</h1>
            </div>
            <div className="Right-block-markup">
                <div className="Summary-order"> 
                    <p>{basket.length + spelling}</p>
                    <p>На сумму: {summaryConverted} р.</p>
                </div>
                <Link to="/basket">
                    <img src={icon} className="Order-icon" alt="order" />
                </Link>
                <ButtonToLog />
            </div>  
        </header> 
    )
}


