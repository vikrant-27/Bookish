import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Navbar() {

const [sticky ,setSticky] = useState(false);

useEffect(()=>{
  
  const handlescroll=()=>{
    if(window.scrollY > 0)
      {
      setSticky(true);
      }
    else{
      setSticky(false);
      }
};
window.addEventListener("scroll",handlescroll);
return()=>{
  window.removeEventListener("scroll",handlescroll);
}
},[]);




  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/read">Read</a>
      </li>
      <li>
        <a href='/author'>Author</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <>
    <div

      className={`max-w-screen-2xl container mx-auto md:px-20 px-4  dark:text-white fixed top-0 left-0 right-0 ${
       sticky?"sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out" 
       :""
      }`}
      style={{ zIndex: 1000 }}
      
      >



    <div className="navbar ">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <a>
    <span className="text-orange-500 text-6xl inline-block" style={{ marginRight: '-0.1em' }}>B</span > <span className='text-2xl'> ookish </span>
    </a>
    </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>

   

  <div className="navbar-end">

  <div className='hidden md:block'>

  <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
</div>

 <div className='pl-2'>
 <Link to="/login" className="btn border-orange-400">Login</Link> </div>
  </div>
</div>
</div>
    </>
  )
}

export default Navbar