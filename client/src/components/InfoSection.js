import React from "react";
import "../components/stylee.css"

const InfoSection = () => {
    return (
        <div className="flex flex-col m-8 justify-between  items-center ">
            <div className="m-4">
                <p style={{ backgroundImage: 'linear-gradient( 109.6deg, rgba(24,138,141,1) 11.2%, rgba(96,221,142,1) 91.1% )', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className="font-bold pb-2 text-4xl">What We Offer</p>
            </div>

            <div className="flex ml-[3rem] gap-12  flex-row">
                <div className="hover:shadow-2xl transition-all duration-[0.4s]">
                    <div className="img1"></div>

                    <div className=" bg-gradient-custom p-2 w-[300px] h-[170px]">
                        <h6 className="font-bold  text-2xl text-white">Detection of Diseases affecting</h6>
                        <p className="text-white">Early detection and accurate diagnosis are crucial for implementing
                            timely interventions and minimizing crop losses.
                        </p>
                    </div>
                </div>

                <div className="hover:shadow-2xl ml-[3rem] gap-12 flex-row transition-all duration-[0.4s]">
                    <div className="img2"></div>

                    <div className=" bg-gradient-custom  w-[300px] p-2 h-[170px]">
                        <h6 className="font-bold text-2xl text-white">Environmental conditions</h6>
                        <p className="text-white"> Crop diseases pose significant threats to agricultural
                            productivity and food security worldwide. </p>
                    </div>
                </div>

                <div className="hover:shadow-2xl ml-[3rem] gap-12 flex-row transition-all duration-[0.2s]">
                    <div className="img3"></div>

                    <div className=" bg-gradient-custom w-[300px] p-1 h-[170px]" >
                        <h6 className="font-bold text-2xl text-white"> Soil health</h6>
                        <p className="text-white">Leveraging advancements in artificial intelligence and machine learning
                            can assist farmers and agricultural experts in identifying and managing
                            Soil Helth effectively</p>
                    </div>
                </div>

            </div>



        </div>
    )
}
export default InfoSection;