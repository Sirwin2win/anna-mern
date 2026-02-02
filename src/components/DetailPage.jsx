import React, { useEffect,useState  } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingle } from '../features/products/SingleProduct'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'




const DetailPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {product,status,error} = useSelector(state=>state.product)
    useEffect(()=>{
        if(status==='idle'){
            dispatch(fetchSingle(id))
        }
    },[])
    // console.log(product)
  return (
    <div>
        <h1>Details Page</h1>
        <div className="row">
            <div className="col-sm-5">
                <img src={`https://anna-apis-144y.onrender.com/${product.image}`} alt="..." />
            </div>
            <div className="col-sm-5">
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button className='btn btn-danger' onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default DetailPage