import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseCart, increaseCart, removeFromCart } from '../features/cart/cartSlice'


const CartPage = () => {
    const dispatch = useDispatch()
    const {cartItems, totalQuantity,totalAmount} = useSelector(state=>state.carts)
    // console.log(cartItems)
  return (
    <div>
        <h1>My Cart Items</h1>

            {cartItems.map(cart=>(
                <div key={cart._id} className='row'>
                  
                        <img src={`https://anna-apis-144y.onrender.com/${cart.image}`} className="col-sm-5"  alt="..." />
                
                    
                        <div className="col-sm-5">
                                        <h5>{cart.title}</h5>
                                        <p>{cart.description}</p>
                                        <p>${cart.price}</p>
                                        <p>{cart.quantity}</p>
                                        <div className="row">

                                        <button className='col-sm-5' onClick={()=>dispatch(increaseCart(cart._id))}>+</button>
                                        <button className='col-sm-5' onClick={()=>dispatch(decreaseCart(cart._id))}>-</button>
                                        </div>
                                        <button className='btn btn-warning' onClick={()=>dispatch(removeFromCart(cart._id))}>Remove</button>
                                    </div>
                  
                    <hr />
                    <button className='btn btn-danger' onClick={()=>dispatch(clearCart())}>Clear Cart</button>
                </div>
                
            ))}
        </div>
   
  )
}

export default CartPage