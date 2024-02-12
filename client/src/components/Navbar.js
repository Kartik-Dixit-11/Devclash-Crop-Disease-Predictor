import { NavLink } from "react-router-dom";
import { FaHandHoldingWater } from "react-icons/fa";
import {AppContext} from "../Context/AppContext";
import "./stylee.css"
import { useContext } from "react";



const Navbar = () =>{
    const {isLogin} = useContext(AppContext);
    return(

        <div className="w-9/12 h-[50px] font-[450] p-4 bg-white rounded-3xl flex flex-row mx-auto justify-between " >

            <div className="text-2xl mb-1">
                
            <NavLink to= "/" >
                    <FaHandHoldingWater/>

                </NavLink>
            </div>

            <div className="w-[35%]">
            <ul className=" flex flex-row  justify-between ">



            <li className="hover:font-bold group" >
                <NavLink to= "/" >
                    <p>Home</p>

                </NavLink>
                <div class="bg-black bottom-0 w-[45px] h-[0.2rem] 
             hidden group-hover:block absolute transition all duration-200"></div>
            </li>
            <li className="hover:font-bold group" >
                <NavLink to= "/selectfile" >
                    <p>Search</p>

                </NavLink>
                <div class="bg-black bottom-0 w-[45px] h-[0.2rem] 
             hidden group-hover:block absolute transition all duration-200"></div>
            </li>

            <li className="hover:font-bold group">
                <NavLink to= "/About" >
                    <p>About</p>

                </NavLink>
                <div class="bg-black bottom-0 w-[45px] h-[0.2rem] 
             hidden group-hover:block absolute transition all duration-200"></div>
            </li>

            <li className="hover:font-bold group">
                <NavLink to= "/Contact" >
                    <p>{isLogin ? "LogOut" : "SignUp"}</p>

                </NavLink>
                <div class="bg-black bottom-0 w-[45px] h-[0.2rem] 
             hidden group-hover:block absolute transition all duration-200"></div>
            </li>
        </ul>
            </div>
    </div>
    )
}

export default Navbar;