import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Auth_Slice/index'




const store = configureStore({
    reducer:{
        auth:authReducer

    }
})


export default store;
