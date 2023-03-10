import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items: [],
        totalQuantity : 0
    },
    reducers: {
        addItemToCart(state,action){
            const newItem = action.payload
            const existingItem = state.items.find((item) => item.id === newItem.id)
            // new Item add in Cart
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                   id: newItem.id,
                   price: newItem.price,
                   quantity: 1,
                   totalPrice: newItem.price,
                   name: newItem.title,
                })}
                // already there in cart
                else{

                    existingItem.quantity++;
                    existingItem.totalPrice = existingItem.totalPrice + newItem.price
                }   
            },
        removeToCart(state,action){
           const id = action.payload;
            // {type: '', payload:2} //action.payload
            // existing - quantity reduce with - 1
            // quantity 1 then remove product
            const existingItem = state.items.find(item => item.id === id)
            if (existingItem.quantity === 1) {
                state.items = state.items.find((item) => item.id !== id)
            } 
            else{
                // 
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
            state.totalQuantity--;
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
