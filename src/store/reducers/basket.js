import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice ({
    name: 'basket',
    initialState: {
        basket:[]
    },
    reducers: {
        addProductInBasket(state,action) {
            state.basket.push(action.payload) 
        },
        delProductInBasket(state,action) {
            state.basket = state.basket.filter(item => item.itemId !== action.payload );
        }            
    }
})

export const { addProductInBasket } = basketSlice.actions
export const { delProductInBasket } = basketSlice.actions
export default basketSlice.reducer