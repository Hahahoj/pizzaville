import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';
import BasketPage from './Pages/BasketPage';
import NotFound from "./Pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ProductsPage />} /> 
          <Route path="/basket" element = {<BasketPage />} /> 
          <Route path="*" element = {<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);