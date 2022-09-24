import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Домашние задания до 23.09.2022 */}
    <App />
    {/* Домашнее задание от 23.09.2022
    <App2 /> */}
  </React.StrictMode>
);