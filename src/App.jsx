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
  </Route>
</Routes>
</BrowserRouter>
</Provider>
  )
}

export default App