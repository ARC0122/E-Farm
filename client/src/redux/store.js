import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userRedux";
import cartReducer from "./cartRedux";



export default configureStore({
    reducer: {
        cart: cartReducer,
        user: useReducer,

    }
});