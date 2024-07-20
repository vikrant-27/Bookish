import React from 'react'
import banner from '../images/banner.png'

function Banner() {
  return (
    <>
    <div className=' max-w-screen-2xl flex flex-col md:flex-row container mx-auto my-10 md:mt-20 mt-15'>
        <div className='w-full md:w-1/2 md:mt-20 md:pt-20 md:ml-20 mt-10 order-2 md:order-1'>
        <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-orange-500 shadow-xl ">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <div className='text-center'>
          <button className="btn mt-6 shadow-lg border-orange-400 bg-transparent text-black  hover:bg-orange-500">Get Started</button>
          </div>
       </div>

        <div className=' w-full md:w-1/2 text-center md:ml-11 md:pl-9 mt-10  order-1'>
        <img src={banner} className="md:w-[550px] md:h-[800px] md:ml-12 rounded-badge"alt=""/>
        
         </div>


    </div>
    
    
    </>
    
  )
}

export default Banner