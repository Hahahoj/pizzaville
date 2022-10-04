import "./Header.css"
import icon from "../Images/Header/icon.svg";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header className="Row-markup">
            <div>
                <h1 className="Page-title">Наша продукция</h1>
            </div>
            <div className="Right-block-markup">
                <div className="Summary-order"> 
                    <p>{props.orderItems} товара</p>
                    <p>На сумму: {props.orderPrice} р.</p>
                </div>
                <Link to="/basket">
                    <img src={icon} className="Order-icon" alt="order" />
                </Link>
            </div>  
        </header> 
    )
}


