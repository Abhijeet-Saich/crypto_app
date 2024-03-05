import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "./slices/coinSlice";
import newsSlice from "./slices/newsSlice";
import detailSlice from "./slices/detailSlice";
import exchangeSlice from "./slices/exchangeSlice";


const store = configureStore({
    reducer : {
        coin : coinSlice,
        news : newsSlice,
        detail : detailSlice,
        exchange : exchangeSlice
    }
})


export default store;