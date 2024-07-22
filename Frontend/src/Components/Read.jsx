import React from 'react';
import banner from '../images/banner.png';
import Navbar from './Navbar';
import Footer from './Footer';
import Swipercard from '../Home/Swipercard';
import { Link } from "react-router-dom";
import list from '../../public/list.json';
import Catbook from './Catbook';

function Read() {
  console.log(list);
  return (
    <>
      {/*navbar */}
      <Navbar />
      {/*navbar */}

      <div className=' p-4'>
        <div className=' p-10 max-w-screen-2xl flex flex-col md:flex-row container mx-auto my-5  '>
          <div className=' w-full md:w-1/2 md:mt-20 md:pt-20 mt-5 order-2 md:order-1'>
            
            <h1 className="text-2xl md:text-4xl">
              We're delighted to have you{" "}
              <span className="text-orange-500">Here! :)</span>
            </h1>
            <p className="mt-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
              assumenda? Repellendus, iste corrupti? Tempore laudantium
              repellendus accusamus accusantium sed architecto odio, nisi expedita
              quas quidem nesciunt debitis dolore non aspernatur praesentium
              assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
              animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
              consequatur!
            </p>

            <Link to="/">
              <button className="mt-6 btn shadow-lg border-orange-400 bg-transparent text-black hover:bg-orange-500 duration-300">
                Back
              </button>
            </Link>
          </div>

          <div className=' w-full md:w-1/2 md:mt-20 md:pt-20 mt-10 order-2 md:order-1'>
            <Swipercard />
          
          </div>
        </div>
      </div>

      <div className=''>
        <Catbook />
      </div>
      

      {/*footer */}
      <Footer />
      {/*footer*/}
    </>
  );
}

export default Read;
``
