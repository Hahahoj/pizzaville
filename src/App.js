import { Route, Routes } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';
import BasketPage from './Pages/BasketPage';
import ItemPage from './Pages/ItemPage';
import AuthPage from './Pages/AuthPage';
import StartPage from './Pages/StartPage';
import NotFound from './Pages/NotFound';

export default function App() {
    return (
        //<ProductsPage />
        <Routes>
            <Route path="/pizzaville/" element={<StartPage />} />  
            <Route path="/pizzaville/auth" element={<AuthPage />} />
            <Route path="/pizzaville/store" element={<ProductsPage />} /> 
            <Route path="/pizzaville/basket" element = {<BasketPage />} /> 
            <Route path="/pizzaville/:id" element = {<ItemPage />} /> 
            <Route path="*" element = {<NotFound />} /> 
        </Routes>
    );
}