import './ProductsPage.css';
import Header from "../components/Header";
import Cards from "../components/Cards";

export default function ProductsPage() {
  return (
    <div className="products">
      <div className="container">
        <Header />
        <Cards />
      </div>
    </div>
  );
};
