import "./Item.css"
import { products } from "../menuList";
import { useDispatch } from "react-redux";
import { addProductInBasket } from "../store/reducers/basket.js"

export default function Cards({pageID}) {
    let ID = pageID.id;
    const dispatch = useDispatch();

    function cardPriceConvert(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

    function cardWeightConvert(weight) {
        let cardWeightConverted = weight;
        if (isNumber(weight)) {
            cardWeightConverted = weight + " г.";
        };
        return cardWeightConverted;
    }

    function uid() {
        let a = new Uint32Array(3);
        window.crypto.getRandomValues(a);
        return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g,"");
    };

    const handleAdd = () => {
        dispatch(addProductInBasket( { 
            "key": products[ID].id-1, "itemId": uid(), "productID": products[ID].id-1,
            "cardImage": products[ID].img, "cardTitle": products[ID].name,
            "cardDescription": products[ID].description,"cardPrice": products[ID].price,
            "cardWeight": products[ID].weight}));
        };
    console.log(products[ID]);        
    return (        
        <div className = "item">
            <img className = "image" src={"../Images/Menu/" + products[ID].img} alt="Вид товара" />        
            <div className = "column-markup">
                <h2 className = "title">
                    {products[ID].name}
                </h2>
                <p className = "description">
                    {/* имитируем большой и толстый текст. по идее этот текст должен находится отдельным полем*/}
                    {products[ID].description}
                    {products[ID].description}
                    {products[ID].description}
                    {products[ID].description}
                    {products[ID].description}
                    {products[ID].description}
                    {products[ID].description}
                    {products[ID].description}
                    {products[ID].description}
                    {products[ID].description}
                    {products[ID].description}
                    {products[ID].description}
                </p>
                <div className = "row-multi">
                    <span className = "price"> 
                        {cardPriceConvert(products[ID].price)} ₽ / </span>
                    <span className = "weight">
                        {cardWeightConvert(products[ID].weight)} </span>
                    <button className = "button-add" 
                        onClick={handleAdd} >В корзину</button>
                </div>
            </div>
        </div>
    );
}