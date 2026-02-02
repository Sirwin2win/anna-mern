import {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { update } from '../features/products/productSlice'
import { useNavigate, useParams } from 'react-router-dom'


const EditProductForm = () => {
        const dispatch = useDispatch()
        const navigate = useNavigate()
        const [image, setImage] = useState(false)
        const {id} = useParams()
        const [data, setData] = useState({
            title:"",
            description:"",
            price:""
        })

        useEffect(()=>{

        },[])

            useEffect(()=>{
                if(status==='idle'){
                    dispatch(fetchSingle(id))
                }
            },[])
    
        const handleChange = (e) =>{
            const name = e.target.name
            const value = e.target.value
            setData(data=>({...data,[name]:value}))
        }
    
        const handleSubmit = (e)=>{
            e.preventDefault()
            const formData = new FormData()
            formData.append("title",data.title)
            formData.append("description",data.description)
            formData.append("price",data.price)
            formData.append("image",image)
            dispatch(update(formData))
            navigate('/product')
            
        }
  return (
    <div className='container'>
            <form method='post' encType='multipart/form-data'>
             <div className='mb-5'>
                <label htmlFor="title">Product Title</label>
                <input type="text" id='title' className='form-control' name='title' value={data.title} onChange={handleChange} placeholder='Product title' />
             </div>
             <div className='mb-5'>
                <label htmlFor="description">Product Description</label>
                <input type="text" id='description' className='form-control' name='description' value={data.description} onChange={handleChange} placeholder='Product description' />
             </div>
             <div className='mb-5'>
                <label htmlFor="price">Product Price</label>
                <input type="text" id='price' className='form-control' name='price' value={data.price} onChange={handleChange} placeholder='Product price' />
             </div>
             <div className='mb-5'>
                <label htmlFor="image">Product Image</label>
                <input type="file" id='image' className='form-control' name='image' onChange={e=>setImage(e.target.files[0])} />
             </div>
             <div className='mb-5'>
                {/* <label htmlFor="image">Product Image</label> */}
                <input type="submit" value='Create' className='btn btn-primary form-control' onClick={handleSubmit}  />
             </div>
            </form>

        </div>
  )
}

export default EditProductForm