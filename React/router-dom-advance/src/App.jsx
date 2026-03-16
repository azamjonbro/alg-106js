import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import OneProduct from './pages/OneProduct'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<OneProduct/>}/>

      </Routes>
    </>
  )
}

export default App