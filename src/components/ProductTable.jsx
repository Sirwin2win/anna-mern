import React, { useEffect, useState } from 'react'
import { deleteProduct, fetchProduct } from '../features/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const ProductTable = () => {
    const {products,status,error} = useSelector(state=>state.products)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(status==='idle'){
            dispatch(fetchProduct())
        }
    },[])
    console.log(products)
  return (
    <div>
        <h1>Product Table</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
                {products.map(product=>(
                    <tr>
                        <td>{product.title}</td>
                        <td><img src={`https://anna-apis-144y.onrender.com/${product.image}`} style={{height:'80px',width:'80px'}} class="card-img-top" alt="..." /></td>
                        <td>{product.price}</td>
                        <td><Link to={'/edit-product'}>edit</Link>| <button onClick={()=>dispatch(deleteProduct(product._id))}>Delete</button></td>
                        </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default ProductTable