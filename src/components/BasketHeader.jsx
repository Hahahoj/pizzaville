import "./BasketHeader.css"
import ButtonToLog from "./ButtonToLog";
import ButtonToBack from "./ButtonToBack";

export default function BasketHeader() {
    return (
        <header className="basketHeader">
            <ButtonToBack />
            <h1 className="basketHeaderH1">Корзина с выбранными товарами</h1>
            <ButtonToLog />
        </header>
    );
}