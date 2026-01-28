import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './components/features/store/store'


const App = () => {
  return (
    <Provider store={store}>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout />}>
  <Route index element={<Home />} />
  </Route>
</Routes>
</BrowserRouter>
</Provider>
  )
}

export default App