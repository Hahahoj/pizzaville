

import { Route, Routes } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';
import BasketPage from './Pages/BasketPage';
import NotFound from "./Pages/NotFound";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<ProductsPage />} /> 
            <Route path="/basket" element = {<BasketPage />} /> 
            <Route path="*" element = {<NotFound />} /> 
        </Routes>
    );
}