import React from 'react'
import "./BasketHeader.css"

export default function BasketHeader(props) {
    return (
        <header className="basketHeader">
            <h1 className="basketHeaderH1">Корзина с выбранными товарами</h1>
            <button class="button_back" />
        </header>
    );
}