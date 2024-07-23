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

        <Route path="/Bookish/" element={<Home/>}/>
        <Route path="Bookish/signup" element={<Signup/>}/>
        <Route path='Bookish/login' element={<Loginpg/>}/>
        <Route path='Bookish/read' element={<Read/>}/>
        <Route path='Bookish/author' element={<Authorpg/>}/>
        
        
      </Routes>
    </>
  )
}

export default App
