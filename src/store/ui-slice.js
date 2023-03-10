  import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:"UI",
    initialState : {cartIsVisible: false,counter:0},
    reducers : {
        toggle(state){
            state.cartIsVisible = ! state.cartIsVisible
        }
    }
})

export const uiActions = uiSlice.actions //ui
export default uiSlice.reducer //store connect