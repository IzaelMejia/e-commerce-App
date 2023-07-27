import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../Features/Counter/counterSlice";
import shopReducer from "../Features/Shop/shopSlice"

export default configureStore({
    reducer:{
        //poner 
        counterReducer,
        shopReducer
    }

})