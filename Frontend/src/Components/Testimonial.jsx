import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



function Testimonial() {
  return (
    <>
    <div className=' container mx-auto md:px-10 mt-20 mb-20 px-4'>

        
        <div className='text-center pt-10'>
        <h1 className="text-2xl md:text-4xl font-bold">
              What they{" "}
              <span className="text-orange-500 ">SAY!!!</span>
            </h1>
        </div>

        <div>
        <div className='flex flex-col space-x-5 md:flex-row justify-center items-center '>

            <div className="card bg-base-200 dark:bg-slate-700 mt-20 w-96 p-5 hover:scale-105 duration-200">
               <div className="card-body items-center text-center">
                <h2 className="card-title">Luffy!</h2>
                <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, consequuntur!.</p>
                <div className="card-actions justify-end">
                <div> {/**star svg */}
                <FontAwesomeIcon className='text-orange-400'  icon={faStar} /> <FontAwesomeIcon className='text-orange-400' icon={faStar} /> <FontAwesomeIcon className='text-orange-400' icon={faStar} /> <FontAwesomeIcon className='text-orange-400'icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    

                </div>
               </div>
             </div>
           </div>

           <div className="card bg-base-200 dark:bg-slate-700 mt-20 w-96 p-5 hover:scale-105 duration-200">
               <div className="card-body items-center text-center">
                <h2 className="card-title">Zoro!</h2>
                <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, consequuntur!.</p>
                <div className="card-actions justify-end">
                <div> {/**star svg */}
                <FontAwesomeIcon className='text-orange-400' icon={faStar} /> <FontAwesomeIcon className='text-orange-400' icon={faStar} /> <FontAwesomeIcon className='text-orange-400' icon={faStar} /> <FontAwesomeIcon className='text-orange-400' icon={faStar}  /> <FontAwesomeIcon className='text-orange-400' icon={faStar} />
                    

                </div>
               </div>
             </div>
           </div>

           <div className="card bg-base-200 dark:bg-slate-700 mt-20 w-96 p-5 hover:scale-105 duration-200">
               <div className="card-body items-center text-center">
                <h2 className="card-title">Nami!</h2>
                <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, consequuntur!.</p>
                <div className="card-actions justify-end">
                <div> {/**star svg */}
                <FontAwesomeIcon  className='text-orange-400' icon={faStar} /> <FontAwesomeIcon className='text-orange-400' icon={faStar} /> <FontAwesomeIcon className='text-orange-400' icon={faStar} /> <FontAwesomeIcon className='text-orange-400' icon={faStar}  /> <FontAwesomeIcon icon={faStar} />
                    

                </div>
               </div>
             </div>
           </div>

        </div>
        </div>


    </div>
    
    </>
  )
}

export default Testimonial