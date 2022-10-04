import './ProductsPage.css';
import Header from "../components/Header";
import Cards from "../components/Cards";
import { useState } from "react"; 

export default function ProductsPage() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <div className="container">
            <Header orderItems={count} orderPrice="3600" />
            <Cards 
              handleAdd = {handleAdd}
            />
      </div>
    </div>
  );
}
