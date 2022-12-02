import "./BasketFooter.css"
import { useSelector } from "react-redux";
import { useState } from "react"; 
// import { useEffect } from "react";
import Modal from "./modal/Modal.jsx";


export default function BasketFooter() {
    let uid4=0, dateOrder="", urlInsert = "", orderList = "";
    let cartPrice=0;

    const basket = useSelector(state => state.basket.basket);

    basket.forEach(element => { 
        cartPrice=cartPrice+(+element.cardPrice)
    });
    let summaryConverted = cartPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");


    // генератор уникального номера
    function uid() {
        let a = new Uint32Array(3);
        window.crypto.getRandomValues(a);
        return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g,"");
    };

    const [show, setShow] = useState (false);

    let onShow = () => {
        setShow(true);
    };

    uid4 = uid().substring(0,4);
    dateOrder = new Date().toLocaleString();
    urlInsert = urlInsert+"id="+String(uid4)+"&date="+dateOrder+"&sum="+String(cartPrice);

    basket.forEach(element => { 
        urlInsert = urlInsert+"&lot="+String(element.productID);
        orderList = orderList + String(element.productID) + ",";
    });

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
                <button className = "buttonAcceptOrder" onClick={() => onShow(true)}>Оформить заказ</button>
                <Modal onClose = {()=> setShow(false)} show={show} summary={cartPrice} urlInsert={urlInsert} title={`Заказ: ${uid4} от ${dateOrder} на сумму: ${summaryConverted} ₽`}>
                    <div className="forma-order-title">Введите контактные данные и адрес доставки:</div>
                    <div className="forma-order-info">(Менеджер перезвонит вам для уточнения деталей заказа)</div>

                    <form className="forma-order" action={`/order.php`} method="get">
                        <input type="text" name="name" placeholder="Ваше имя"/>
                        <br />
                        <input type="text" name="phone" placeholder="Ваш телефон"/>
                        <br />
                        <input type="text" name="adress" placeholder="Адрес доставки"/>
                        <input type="hidden" name="orderid" value = {uid4} />
                        <input type="hidden" name="date" value = {dateOrder} />
                        <input type="hidden" name="price" value = {cartPrice} />
                        <input type="hidden" name="orderbody" value = {orderList} />
                        <hr className="forma-order-decor" />
                        <input type="submit" value="Отправить" />
                    </form>                    
                </Modal>
            </footer>
        </>    
    );
}