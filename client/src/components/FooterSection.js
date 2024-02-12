import React from "react";
import "./stylee.css"
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
const FooterSection = () => {

    return (
        <div className="relative">
            <section className="bg-[#304146] relative flex flex-col rounded-md">
                <div className="flex flex-row justify-evenly mt-7 ">
                    <div className="">
                        <div style={{ backgroundImage: 'linear-gradient( 109.6deg, rgba(24,138,141,1) 11.2%, rgba(96,221,142,1) 91.1% )', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className="text-xl font-bold">
                            Socials
                        </div>
                        <div className="flex text-2xl  gap-2">
                            <FaLinkedin className="cursor-pointer text-white text-opacity-30 hover:text-opacity-100" />
                            <FaInstagramSquare className=" cursor-pointer text-white text-opacity-30 hover:text-opacity-100"/>
                            <FaTwitterSquare className="cursor-pointer text-white text-opacity-30 hover:text-opacity-100"/>
                            <FaFacebookSquare className="cursor-pointer text-white text-opacity-30 hover:text-opacity-100"/>
                        </div>
                    </div>

                    <div className="flex flex-col ">
                        <div className="flex flex-col space-y-2">
                            <NavLink to='/About'>
                                <p className="text-white text-opacity-30 hover:text-opacity-100"><a href="#">About Us</a></p>
                            </NavLink>
                            <p className="text-white text-opacity-30 hover:text-opacity-100"><a href="#">Terms and Conditions</a></p>
                            <p className="text-white text-opacity-30 hover:text-opacity-100"><a href="#">Privacy Policy</a></p>
                        </div>
                    </div>
                    <div className="flex flex-col  ">
                        <div className="flex flex-col space-y-2">
                            <p className="text-white text-opacity-30 hover:text-opacity-100"><a href="#">Call Us: 1122334455</a></p>
                            {/* <p className="text-white text-opacity-30"><a href="#"></a></p> */}
                            {/* <p className="text-white text-opacity-30"><a href="#">  </a></p> */}
                        </div>
                    </div>
                    {/* <div className="flex flex-col ">
                        <h2 style={{ backgroundImage: 'linear-gradient( 109.6deg, rgba(24,138,141,1) 11.2%, rgba(96,221,142,1) 91.1% )', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className=" text-green-600 font-bold text-xl">BANKING PLUS</h2>
                        <div className="flex flex-col space-y-2">
                            <p className="text-white"><a href="#">RazorPayX</a></p>
                            <p className="text-white"><a href="#">Current Accounts</a></p>
                            <p className="text-white"><a href="#">PayOuts</a></p>
                            <p className="text-white"><a href="#">View Live Demo</a></p>
                        </div>
                    </div> */}
                </div>
                <div className="bg-[#2f3939] h-[0.15rem] w-full mt-4"></div>
                <div className="flex flex-row justify-center items-center mt-2  relative ">
                    <h2 className="" style={{ backgroundImage: 'linear-gradient( 109.6deg, rgba(24,138,141,1) 11.2%, rgba(96,221,142,1) 91.1% )', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Register for Free</h2>
                    <NavLink to='/SignUp'>
                        <button className=" bg-gradient-custom shadow-xl text-white font-bold rounded-md w-24 justify-center h-7 ml-3 hover:text-white hover:shadow-md  ">Sign Up</button>
                    </NavLink>
                </div>
                <div className=" h-[0.15rem] w-full"></div>

                <div className="flex flex-row justify-center items-center bg-[#252c2d] h-10 transition all duration-1000 text-white mt-5"> <p>&#169; 2023 Copyright. Code Warriors, All Rights Reserved</p></div>

            </section>
        </div>
    )
}

export default FooterSection;