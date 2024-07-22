import React from 'react'
import favimage from '../images/favourate.jpg'
import { Link } from 'react-router-dom'

function Favbanner() {
  return (
    <>

    {/*main div*/}
<div className=' container mx-auto md:px-10 mt-20  mb-20 px-4'>  

   <div className="card lg:card-side  bg-base-100 shadow-xl "> {/*main section div*/}
    <figure>
    <img className=''
      src={favimage}
      alt="Album" />
    </figure>

  <div className="card-body md:pt-80 md:pl-20">
    <h2 className="card-title text-center md:text-left  ">Find your favourate book here!</h2>
    <p className='text-sm text-center md:text-left'>Click the button to Explore.</p>
    <div className="card-actions flex justify-center items-center md:mb-96 md:pb-40 ">
      <Link to={"read"}>
      <button className="btn  btn-primary shadow-lg border-orange-400 bg-transparent text-black bg-orange-400 hover:bg-orange-300 hover:border-orange-300 ">Explore</button> </Link>
    </div>
  </div>

</div>
    </div>
    
    </>
  )
}

export default Favbanner