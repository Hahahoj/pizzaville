import './BasketPage.css';
import BasketHeader from "../components/BasketHeader";
import Basket from "../components/Basket";
import BasketFooter from '../components/BasketFooter';

export default function BasketPage() {
    return (
        <div className="basketPage">
            <div className="container2">
                <BasketHeader />
                <Basket />
                <BasketFooter />
            </div>
        </div>
    );
}


