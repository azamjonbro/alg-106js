import React, { useState } from 'react'
import Hero from "./Hero.jsx"
function App() {
  const [products, setProducts] = useState([])

  return (
    <main>
      <Hero sizlarKimsizlar="dumbullarmiz" products={products}/>

    </main>
  )
}

export default App