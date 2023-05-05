import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/user.slice.ts"

export const store = configureStore({
    reducer:{
        userReducer
    }
})