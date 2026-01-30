import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../features/products/productSlice'
import { Link } from 'react-router-dom'


const Product = () => {
    const {products,status,error} = useSelector(state=>state.products)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(status==='idle'){
            dispatch(fetchProduct())
        }
    },[status,dispatch])
    console.log(products)
  return (
    <div>
        <h1>New Arrivals</h1>
        <div className="row">
            {products.map((product)=>(
                <div key={product._id} className="col-sm-4">
                    <div class="card" style={{width: '18rem'}}>
  <img src={`https://anna-apis-144y.onrender.com/${product.image}`} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p>$ {product.price}</p>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
    <Link to={`/product/${product._id}`} class="btn btn-primary">Go somewhere</Link>
  </div>
</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Product