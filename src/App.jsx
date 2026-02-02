import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './features/store/store'
import ProductFrom from './forms/ProductFrom'
import Product from './pages/Product'
import DetailPage from './components/DetailPage'
import CartPage from './components/CartPage'
import RegisterForm from './forms/RegisterForm'
import EditProductForm from './forms/EditProductForm'
import LoginForm from './forms/LoginForm'
import ProductTable from './components/ProductTable'


const App = () => {
  return (
<Provider store={store}>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout />}>
  <Route index element={<Home />} />
  <Route path='/create-product' element={<ProductFrom />} />
  <Route path='/product' element={<Product />} />
  <Route path='/product/:id' element={<DetailPage />} />
  <Route path='/cart' element={<CartPage />} />
  <Route path='/register' element={<RegisterForm />} />
  <Route path='/login' element={<LoginForm />} />
  <Route path='/product-table' element={<ProductTable />} />
  <Route path='/edit-product' element={<EditProductForm />} />
  </Route>
</Routes>
</BrowserRouter>
</Provider>
  )
}

export default App