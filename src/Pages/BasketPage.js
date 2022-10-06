import './BasketPage.css';
import BasketHeader from "../components/BasketHeader";
import Basket from "../components/Basket";
import BasketFooter from '../components/BasketFooter';

export default function BasketPage() {
    global.sum=0;
    return (
        <div className="App2">
            <div className="container2">
                <BasketHeader />
                <Basket />
                <BasketFooter summary = "6220" />
            </div>
        </div>
    );
}


