import "./BasketHeader.css"
import { Link } from "react-router-dom";

export default function BasketHeader(props) {
    return (
        <header className="basketHeader">
            <h1 className="basketHeaderH1">Корзина с выбранными товарами</h1>
            <Link to="/">
                <button class="button_back" />
            </Link>
        </header>
    );
}