import "./BasketFooter.css"

export default function BasketFooter(props) {
    let summaryConverted = props.summary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
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