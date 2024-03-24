import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Products from './Pages/Products/Products'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/Product' element={<Product></Product>} />
        <Route path='/Products' element={<Products></Products>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
