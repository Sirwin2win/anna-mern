import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../products/productSlice'
import singleSlice from '../products/SingleProduct'
import cartSlice from '../cart/cartSlice'
import authSlice from '../auth/authSlice'


const store = configureStore({
    reducer:{
        products:productSlice,
        product:singleSlice,
        carts:cartSlice,
        users:authSlice
    }
})

export default store