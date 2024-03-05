import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { exchangeOptions } from "../../apiUtils/apiUtils";


const initialState = {
    status : "idle",
    data : [],
    error : ""
}

export const getExchange = createAsyncThunk('getExchange',async({coinID})=>{


        try {
            const response = await axios.request(exchangeOptions);
            return response.data;
            
        } catch (error) {
            return error.message;
        }
})


const exchangeSlice = createSlice({
    name : 'exchange',
    initialState,
    reducer : {

    },
    extraReducers : (builder) =>{
        
        builder.addCase(getExchange.pending,(state) =>{
            state.status = 'loading';
        })
        builder.addCase(getExchange.fulfilled,(state,action) =>{
            state.status = 'received';
            state.data = action.payload;
        })
        builder.addCase(getExchange.rejected,(state,action) =>{
            state.status = 'failed';
            state.error = action.payload;
        })
    }
})


export default exchangeSlice.reducer;