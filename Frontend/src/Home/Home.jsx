import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Favbanner from '../Components/Favbanner'
import Stats from '../Components/Stats'
import Testimonial from '../Components/Testimonial'

function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Favbanner/>
    <Stats/>
    <Testimonial/>   
    <Footer/>
    
    </>
  )
}

export default Home