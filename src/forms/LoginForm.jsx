import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../features/auth/authSlice'


const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data,setData] = useState({
        email:'',
        password:''
    })
    const {status,user} = useSelector(state=>state.users)
    console.log(user)

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setData(data=>({...data,[name]:value}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(login(data))
        if(status==='succeeded'){
          navigate('/product')
        }
    }


  return (
   <div className='container'>
        <form method='post'>
              <div className='mb-5'>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' className='form-control' name='email' value={data.email} onChange={handleChange} placeholder='your email' />
             </div>
              <div className='mb-5'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' className='form-control' name='password' value={data.password} onChange={handleChange} placeholder='your password' />
             </div>
             <input type="submit" value={'Login'} onClick={handleSubmit}  />
        </form>
    </div>
  )
}

export default LoginForm