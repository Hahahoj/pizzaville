import { Route, Routes } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';
import BasketPage from './Pages/BasketPage';
import ItemPage from './Pages/ItemPage';
import AuthPage from './Pages/AuthPage'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<ProductsPage />} />  
            <Route path="/auth" element={<AuthPage />} /> 
            <Route path="/basket" element = {<BasketPage />} /> 
            <Route path="/:id" element = {<ItemPage />} /> 
        </Routes>
    );
}