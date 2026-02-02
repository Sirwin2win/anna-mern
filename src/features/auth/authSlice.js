import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


const API = 'https://anna-apis-144y.onrender.com/api/auth'

// register
export const register = createAsyncThunk(
    'users/register',
    async({name,email,password},thunkAPI)=>{
        try {
            const response = await axios.post(`${API}/register`,{name,email,password})
        return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
// login
export const login = createAsyncThunk(
    'users/login',
    async(forms,thunkAPI)=>{
        try {
            const response = await axios.post(`${API}/login`,forms)
        return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
// logout
export const logout = createAsyncThunk(
    'users/logout',
    async()=>{
        localStorage.removeItem('token')
    }
)

const authSlice = createSlice({
    name:'users',
    initialState:{
        users:[],
        status:'idle',
        error:null,
        user:null
    },reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.error = null
        })
        .addCase(register.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
        // login
        .addCase(login.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
    .addCase(login.fulfilled,(state,action)=>{
        state.status = 'succeeded'
        const {token} = action.payload
        try {
           const decoded = jwtDecode(token);
           state.user = decoded.id
        
        } catch (error) {
            state.error = error.message
        }
    })
    .addCase(login.rejected,(state,action)=>{
        state.status = 'failed'
        state.error = action.payload
    })
    // logout
    .addCase(logout.fulfilled,(state)=>{
        state.user = null
        state.token = null
        state.status = 'idle'
    })
    }
})

export default authSlice.reducer