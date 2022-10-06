import './ProductsPage.css';
import Header from "../components/Header";
import Cards from "../components/Cards";
import { useState } from "react"; 

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
