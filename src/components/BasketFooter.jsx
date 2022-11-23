import "./BasketFooter.css"
import { useSelector } from "react-redux";
import { useState } from "react"; 
import Modal from "./modal/Modal.jsx";


export default function BasketFooter() {

    // генератор уникального номера
    function uid() {
        let a = new Uint32Array(3);
        window.crypto.getRandomValues(a);
        return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g,"");
    };

    const [show, setShow] = useState (false);

    const basket = useSelector(state => state.basket.basket);
    let cartPrice=0;
    basket.forEach(element => { 
        cartPrice=cartPrice+(+element.cardPrice)
    });
    let summaryConverted = cartPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return (
        <>
            <div className = "lineBreak"></div>
            <footer className = "footer">
                <div className = "footerText">
                    Заказ на сумму:
                </div>
                <div className = "footerSum">
                    {summaryConverted} ₽
                </div>
                <button className = "buttonAcceptOrder" onClick={() => setShow(true)}>Оформить заказ</button>
                <Modal onClose = {()=> setShow(false)} show={show} summary={cartPrice} title={`Заказ: ${uid().substring(0,4)} от ${new Date().toLocaleString()} на сумму: ${summaryConverted} ₽`}>
                    <div className="forma-order-title">Введите контактные данные и адрес доставки:</div>
                    <div className="forma-order-info">(Менеджер перезвонит вам для уточнения заказа)</div>

                    <form className="forma-order">
                        <input type="text" name="name" placeholder="Ваше имя"/>
                        <br />
                        <input type="text" name="adress" placeholder="Ваш телефон"/>
                        <br />
                        <input type="text" name="phone" placeholder="Адрес доставки"/>
                        <hr className="forma-order-decor" />
                        <input type="submit" value="Отправить" />
                    </form>                    
                </Modal>
            </footer>
        </>    
    );
}