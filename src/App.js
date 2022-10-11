import { Route, Routes } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';
import BasketPage from './Pages/BasketPage';
import ItemPage from './Pages/ItemPage';
import AuthPage from './Pages/AuthPage';
import StartPage from './Pages/StartPage';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<StartPage />} />  
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/store" element={<ProductsPage />} /> 
            <Route path="/basket" element = {<BasketPage />} /> 
            <Route path="/:id" element = {<ItemPage />} /> 
        </Routes>
    );
}