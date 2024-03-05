import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { newsOptions } from "../../apiUtils/apiUtils";

const initialState = {
    status : "idle",
    data : [],
    error : ""
}

export const getNews = createAsyncThunk('getNewsData',async()=>{
        try {
            const response = await axios.request(newsOptions);
            console.log(response.data);
            return response.data;
            
        } catch (error) {
            return error.message;
        }
})


const newsSlice = createSlice({
    name : 'news',
    initialState,
    reducer : {

    },
    extraReducers : (builder) =>{
        
        builder.addCase(getNews.pending,(state) =>{
            state.status = 'loading';
        })
        builder.addCase(getNews.fulfilled,(state,action) =>{
            state.status = 'received';
            state.data = action.payload;
        })
        builder.addCase(getNews.rejected,(state,action) =>{
            state.status = 'failed';
            state.error = action.payload;
        })
    }
})


export default newsSlice.reducer;