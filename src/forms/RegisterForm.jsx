import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'


const RegisterForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data,setData] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setData(data=>({...data,[name]:value}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(register(data))
    }

  return (
    <div>
        <form method='post'>
             <div className='mb-5'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' className='form-control' name='name' value={data.name} onChange={handleChange} placeholder='Your name' />
             </div>
              <div className='mb-5'>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' className='form-control' name='email' value={data.email} onChange={handleChange} placeholder='your email' />
             </div>
              <div className='mb-5'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' className='form-control' name='password' value={data.password} onChange={handleChange} placeholder='your password' />
             </div>
             <input type="submit" value={'Register'}  />
        </form>
    </div>
  )
}

export default RegisterForm