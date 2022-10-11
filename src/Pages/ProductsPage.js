import './ProductsPage.css';
import Header from "../components/Header";
import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom";

export default function ProductsPage() {
  // const navigate = useNavigate();
  // console.log("GL=",!(global.logined));
  // console.log(typeof(global.logined) != "undefined");
  // if (!global.logined) {
  //   navigate("/auth");
  // }  
  
return (
  <div className="products">
    <div className="container">
      <Header />
      <Cards />
    </div>
  </div>
  );
}