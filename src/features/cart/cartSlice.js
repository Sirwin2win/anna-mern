import {createSlice} from '@reduxjs/toolkit';


// Save to localStorage
const saveStorage = (cartData)=>{
    try {
        return localStorage.setItem('cartData',JSON.stringify(cartData))
    } catch (error) {
        return error.message
    }
}

// Fetch from  localStorage
const getStorage = ()=>{
    try {
      const data = localStorage.getItem('cartData') 
      return data?JSON.parse(data):null
    } catch (error) {
        return error.message
    }
}

const initialState = 
getStorage() || {
    cartItems:[],
    totalQuantity:0,
    totalAmount:0
}

const cartSlice = createSlice({
    name:'carts',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item = action.payload
            const existingItem = state.cartItems.find(v=> v._id==item._id)
            if(existingItem){
                existingItem.quantity +=1
            }else{
                state.cartItems.push({...item,quantity:1})
            }
            state.totalAmount +=item.price
            state.totalQuantity +=1
            // save storage
            saveStorage(state)
        },
        removeFromCart:(state,action)=>{
            const id = action.payload
            const item = state.cartItems.find(v=>v._id==id)
            if(item){
                state.totalAmount -=item.quantity*item.price
                state.totalQuantity -=item.quantity
            }
            state.cartItems = state.cartItems.filter(v=>v._id !=id)
            // save storage
            saveStorage(state)
        },
        increaseCart:(state,action)=>{
            const id = action.payload
            const item = state.cartItems.find(v=>v._id==id)
            if(item){
                item.quantity +=1
                state.totalQuantity +=1
                state.totalAmount +=item.price
            }
            // save storage
            saveStorage(state)
        },
        decreaseCart:(state,action)=>{
            const id = action.payload
            const item = state.cartItems.find(v=> v._id==id)
            if(item){
                item.quantity -=1
                state.totalQuantity -=1
                state.totalAmount -=item.price
            }
            if(item.quantity===0){
                state.cartItems = state.cartItems.filter(v=>v._id != id)
                // save storage
                saveStorage(state)
            }
        },
        clearCart:(state,action)=>{
            state.cartItems =[]
            state.totalAmount =0
            state.totalQuantity = 0
            localStorage.removeItem('cartData')
        }
    }
})
export const {addToCart,removeFromCart,increaseCart,decreaseCart,clearCart} = cartSlice.actions
export default cartSlice.reducer