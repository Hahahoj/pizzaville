import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice ({
    name: 'basket',
    initialState: {
        basket:[]
    },
    redusers: {
        addProductInBasket(state,action) {
            state.basket.push(action.payload)
        }
    }
})

export const { addProductInBasket } = basketSlice.actions
export default basketSlice.reducer