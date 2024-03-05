import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { coinDetail } from "../../apiUtils/apiUtils";


const initialState = {
    status : "idle",
    data : [],
    error : ""
}

export const getCoinDetail = createAsyncThunk('getCoinDetail',async({coinID})=>{

        coinDetail.url =  coinDetail.url + coinID;

        try {
            const response = await axios.request(coinDetail);
            return response.data.data;
            
        } catch (error) {
            return error.message;
        }
})


const detailSlice = createSlice({
    name : 'detail',
    initialState,
    reducer : {

    },
    extraReducers : (builder) =>{
        
        builder.addCase(getCoinDetail.pending,(state) =>{
            state.status = 'loading';
        })
        builder.addCase(getCoinDetail.fulfilled,(state,action) =>{
            state.status = 'received';
            state.data = action.payload;
        })
        builder.addCase(getCoinDetail.rejected,(state,action) =>{
            state.status = 'failed';
            state.error = action.payload;
        })
    }
})


export default detailSlice.reducer;