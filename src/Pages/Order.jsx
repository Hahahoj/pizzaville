import './Order.css';
import { useParams } from 'react-router-dom';

export default function Order() {
    const pageID = useParams ()

    return (
        <div className="ItemPage">
            <div className="container3">
                <p>Заказ {pageID} принят на обработку</p>
                <button>Продолжить</button>
            </div> 
        </div>
    );
}