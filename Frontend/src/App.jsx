import { useState } from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Loginpg from './Components/Loginpg'
import Read from './Components/Read'
import Authorpg from './Components/Authorpg'



function App() {  

  return (
    <>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/login' element={<Loginpg/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/author' element={<Authorpg/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
      </Routes>
    </>
  )
}

export default App
