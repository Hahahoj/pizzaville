import './ProductsPage.css';
import Header from "../components/Header";
import Cards from "../components/Cards";

export default function ProductsPage() {
  return (
    <div className="App">
      <div className="container">
            <Header orderItems="3" orderPrice="3600" />
            <Cards />
      </div>
    </div>
  );
}
