import "./BasketFooter.css"
import { useSelector } from "react-redux";


export default function BasketFooter() {
    const basket = useSelector(state => state.basket.basket);
    let cartPrice=0;
    basket.forEach(element => { 
        cartPrice=cartPrice+(+element.cardPrice)
    });
    let summaryConverted = cartPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return (
        <footer className = "footer">
            <div className = "footerText">
                Заказ на сумму:
            </div>
            <div className = "footerSum">
                {summaryConverted} ₽
            </div>
            <button className = "buttonAcceptOrder">Оформить заказ</button>
        </footer>
    );
}