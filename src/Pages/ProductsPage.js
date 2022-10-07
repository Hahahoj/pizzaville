/* eslint-disable no-lone-blocks */
import './ProductsPage.css';
import Header from "../components/Header";
import Cards from "../components/Cards";

export default function ProductsPage() {
  
return (
  <div className="products">
    <div className="container">
      <Header orderItems={0} orderPrice={0} />
      <Cards />
    </div>
  </div>
  );
}


{/* тут проброшен onClick по добавлению в корзину, который 
работает по старому заданию от 29.09.2022 

//import { useState } from "react"; 

export default function ProductsPage() {

  const [count, setCount] = useState(0);
  const [summary, setSummary] = useState(0);

  const handleAdd = (price) => {
    setCount(count + 1);
    setSummary(summary+(+price));
  }


  return (
    <div className="App">
      <div className="container">

            <Header orderItems={count} orderPrice={summary} />
            <Cards 
              handleAdd = {handleAdd}
            />
      </div>
    </div>
  );
}
*/}