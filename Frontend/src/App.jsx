import { useState } from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'



function App() {  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </>
  )
}

export default App
