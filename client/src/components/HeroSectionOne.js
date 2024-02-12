import { NavLink } from "react-router-dom";
import "../components/stylee.css"
import Navbar from "./Navbar";
const HeroSectionOne = () => {
    return (
        <div className="    ">
            <div className=" w-screen flex-col  pt-7 my-auto mx-auto h-full bg-cover images">
                <div className="w-[100%] z-20">
                    <Navbar />
                </div>
                <div className="heroleft ml-[9.5rem] flex flex-col w-[45%] ">
                    <div>
                        <p className="text-[rgb(240,255,255)] homehead font-bold text-[3rem]">Welcome to Intelligent <span style={{ backgroundImage: 'linear-gradient( 109.6deg, rgba(24,138,141,1) 11.2%, rgba(96,221,142,1) 91.1% )', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Crop Disease</span> Prediction System</p>
                    </div>

                    <p className="text-white font-bold hometext text-[1.2rem]">By analyzing images of leaves or environmental
                        factors, this intelligent system predicts problems before they wreak havoc,
                        allowing farmers to take early action with targeted treatment, minimizing yield
                        loss and maximizing profits. Think of it as a vigilant watchtower, safeguarding
                        crops and empowering farmers with knowledge for a healthier, more sustainable future. </p>

                    <div>

                    </div>
                </div>

                <div className="relative flex w-[30%]  ml-[7rem] mt-7 justify-evenly">
                    <NavLink to='/selectfile'>
                        <button className="  bg-white hover:bg-opacity-100 bg-opacity-90 text-black border-black transition all font-bold rounded-3xl w-[140px] p-2">
                            Get Started
                        </button>
                    </NavLink>

                    <NavLink to='/About'>
                        <button className="text-white transition all duration-500 border-solid border-2 border-white font-bold rounded-3xl w-[140px] p-2">
                            Learn More
                        </button>
                    </NavLink>
                </div>

                {/* <div className="relative mt-[4rem] w-[60%] h-[50px] font-[450] p-2 bg-white rounded-3xl flex flex-row mx-auto justify-between ">
                   
                   
                    <button className="text-green-600 border-solid border-[1.5px] border-green-600 font-bold hover:text-white hover:bg-green-600 rounded-3xl w-[120px]">
                        Learn More
                    </button>

                    <button className="text-green-600 border-solid border-[1.5px] border-green-600 hover:text-white hover:bg-green-600 font-bold rounded-3xl w-[120px]">
                        Learn More
                    </button>

                    <button className="text-green-600 hover:text-white hover:bg-green-600 border-solid border-[1.5px] border-green-600 font-bold rounded-3xl w-[120px]">
                        Learn More
                    </button>

                  
                    <p className="font-bold p-1">Get Started with your First Discount</p>

                </div> */}

            </div>
        </div>
    )
}

export default HeroSectionOne;