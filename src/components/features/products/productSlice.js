import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from axios


const API = 'https://example.com'

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async(formData,thunkAPI)=>{
        try {
        const response = await axios.post(API,formData)
        return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const productSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        status:'idle', // loading, succeeded, failed
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        // create products
        .addCase(createProduct.pending, (state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(createProduct.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.products.push(action.payload)
        })
        .addCase(createProduct.rejected, (state,action)=>{
            state.status = 'failed'
            state.error = error.payload
        })
    }
})

export default productSlice.reducer