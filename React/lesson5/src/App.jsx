import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from "./pages/About"
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
    </>
  )
}

export default App