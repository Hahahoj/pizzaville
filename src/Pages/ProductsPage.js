import './ProductsPage.css';
import Header from "../components/Header";
import Cards from "../components/Cards";
import { useState } from "react"; 

export default function ProductsPage() {
  const [count, setCount] = useState(0);

  if (global.sum === undefined) {global.sum=0};

  const handleAdd = (price) => {
    setCount(count + 1)
    global.sum=(+global.sum)+(+price);
  }

  return (
    <div className="App">
      <div className="container">
            <Header orderItems={count} orderPrice={global.sum} />
            <Cards 
              handleAdd = {handleAdd}
            />
      </div>
    </div>
  );
}
