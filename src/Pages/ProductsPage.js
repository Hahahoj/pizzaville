import './ProductsPage.css';
import Header from "../components/Header";
import Cards from "../components/Cards";
import { Link } from 'react-router-dom';

export default function ProductsPage() {
  
return (
  <div className="products">
    <div className="container">
      <Header />
      <Cards />
    </div>
  </div>
  );
}