import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const API = 'https://anna-apis-144y.onrender.com/api/products'
// create product
export const createProduct = createAsyncThunk(
    'products/createProduct', // action type string
    async(formData,thunkAPI)=>{ // payload creator function
        try {
        const response = await axios.post(API,formData)
        return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

// fetch product
export const fetchProduct = createAsyncThunk(
    'products/fetchProduct',
    async(_,thunkAPI)=>{
        try {
            const response = await axios.get(API)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
// delete 

export const deleteProduct = createAsyncThunk(
    'products/delete',
    async(id,thunkAPI)=>{
        try {
            await axios.delete(`${API}/${id}`)
            return id
        } catch (error) {
                        return thunkAPI.rejectWithValue(error.message)

        }
    }
)
// update
export const update = createAsyncThunk(
    'products/update',
    async({id,formData},thunkAPI)=>{
        try {
            const res = await axios.put(`${API}/${id}`,formData)
            return res.data
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
            state.error = action.payload
        })
        // fetch products
        .addCase(fetchProduct.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.products = action.payload
        })
        .addCase(fetchProduct.rejected, (state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
        // delete
        .addCase(deleteProduct.pending,(state)=>{
            state.status='loading'
            state.error=null
        })
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            const id = action.payload
            state.products = state.products.filter(v=>v._id!=id)
        })
        .addCase(deleteProduct.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
        // update
        .addCase(update.pending,(state)=>{
            state.status='loading'
            state.error = null
        })
        .addCase(update.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            const updated = action.payload
            const index = state.products.findIndex(p=>p._id==updated._id)
            if(index !== -1){
                state.products[index] = updated
            }
        })
        .addCase(update.rejected, (state,action)=>{
            state.status= 'failed'
            state.error = action.payload
        })
    }
})

export default productSlice.reducer