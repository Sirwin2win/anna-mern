import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://anna-apis-144y.onrender.com/api/products'

export const fetchSingle = createAsyncThunk(
    'product/fetchSingle',
    async(id,thunkAPI)=>{
        try {
            const res = await axios.get(`${API}/${id}`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const singleSlice = createSlice({
    name:'product',
    initialState:{
        product:0,
        status:'idle',
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        // fetchSingle 
        .addCase(fetchSingle.pending, (state)=>{
            state.status= 'loading'
            state.error = null
        })
        .addCase(fetchSingle.fulfilled, (state,action)=>{
            state.status = 'succeeded'
            state.product = action.payload

        })
        .addCase(fetchSingle.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
    }
})

export default singleSlice.reducer