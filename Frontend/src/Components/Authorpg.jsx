import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Authorpg() {
    return (
        <>
            {/*navbar */}
            <Navbar />
            {/*navbar */}

            <div className=" p-4">
                <div className="mockup-window bg-base-300 border mt-28">
                <h1 className="text-2xl text-center md:text-4xl font-bold">
                    <div className="pb-8">                    
                    Welcome to <span className="text-orange-500 shadow-xl ">Author's</span> Dashboard{" "} 
                    </div>             
                    </h1>
                    <div className="bg-base-200 flex justify-center px-4 py-5">
                        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
                            <li>
                                <a>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    Inbox
                                    <span className="badge badge-sm">99+</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Updates
                                    <span className="badge badge-sm badge-warning">NEW</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    Stats
                                    <span className="badge badge-xs badge-info"></span>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                    
                  


                    {/* main content section */}

                    <div className=" p-10 max-w-screen-2xl flex flex-col md:flex-row container mx-auto my-5  ">
                        <div className=" w-64 mr-96 mt-5 order-2 md:order-1">
                            <ul className="menu bg-base-200 rounded-box w-56">
                                <li>
                                    <a>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                        Dahboard
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        Item 1
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                        Item 3
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                        Item 3
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                        Item 3
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                        Item 3
                                    </a>
                                </li>
                            </ul>

                            {/* <Link to="/">
              <button className="mt-6 btn shadow-lg border-orange-400 bg-transparent text-black hover:bg-orange-500 duration-300">
                Back
              </button>
            </Link> */}
                        </div>
                        {/**-------------------------------------right section-------------------------------------- */}
                        <div className=" w-96  md:mr-28 pr-36 h-screen  mt-10 order-2 md:order-1 flex flex-col md:flex-row space-x-32 justify-center ">
                            <div className=" md:pl-8 md:pr-8">
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        Name:
                                        <input type="text" className="grow" placeholder=" Name of the Book" />
                                    </label>
                                    <br />
                                    <label className="input input-bordered flex items-center gap-2">
                                        Title:
                                        <input type="text" className="grow" placeholder=" Title of the book" />
                                    </label>
                                    <br />
                                    <label className="input input-bordered flex items-center gap-2">
                                    Description:
                                        <input type="text" className="grow" placeholder="Enter" />

                                    </label>
                                    <br />
                                    <label className="input input-bordered flex items-center gap-2">
                                        Author:
                                        <input type="text" className="grow" placeholder=" Name of the author" />
                                        <span className="badge bg-orange-400 badge-info">Verified</span>
                                    </label>
                                    <br />
                                </div>
                            </div>
                            <div className="bg md:pl-8 md:pr-8">
                               
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        Page count:
                                        <input type="text" className="grow" placeholder="200-300" />
                                    </label>
                                    <br />
                                    <label className="input input-bordered flex items-center gap-2">
                                        Category:
                                        <input type="text" className="grow" placeholder="best seller / new arrival" />
                                    </label>
                                    <br />
                                    <label className="input input-bordered flex items-center gap-2">
                                        Genre:                                        
                                        <input type="text" className="grow" placeholder="Fiction/Romance" />
                                        
                                        
                                    </label>
                                    <br />
                                    <label className="input input-bordered flex items-center gap-2">
                                        Price:
                                        <input type="text" className="grow" placeholder="enter" />
                                        <span className="badge bg-orange-400 badge-info">$</span>
                                    </label>

                                    <div className="justify-center items-center">
                                    <button className="btn my-4 shadow-lg border-orange-400 bg-transparent text-black  hover:bg-orange-500">Publish</button>
                                    </div>
                                </div></div>
                                

                        </div>
                        
                    </div>


                    {/* main content section */}


                    <div>
                        your work
                    </div>
                   
                </div>


            </div>

            {/*footer */}
            <Footer />
            {/*footer*/}
        </>
    );
}

export default Authorpg;
