import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { coinOptions } from "../../apiUtils/apiUtils";

const initialState = {
    status : "idle",
    data : [],
    error : ""
}

export const getCoins = createAsyncThunk('getCoinData',async()=>{
        try {
            const response = await axios.request(coinOptions);
            return response.data;
            
        } catch (error) {
            return error.message;
        }
})


const coinSlice = createSlice({
    name : 'coin',
    initialState,
    reducer : {

    },
    extraReducers : (builder) =>{
        
        builder.addCase(getCoins.pending,(state) =>{
            state.status = 'loading';
        })
        builder.addCase(getCoins.fulfilled,(state,action) =>{
            state.status = 'received';
            state.data = action.payload;
        })
        builder.addCase(getCoins.rejected,(state,action) =>{
            state.status = 'failed';
            state.error = action.payload;
        })
    }
})


export default coinSlice.reducer;