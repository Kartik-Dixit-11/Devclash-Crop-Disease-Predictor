import React from 'react';
import "./About.css"
import Navbar from '../components/Navbar';
import about1 from '../images/imagesabout.jpg'
import about2 from '../images/Plant-disease-classifier-with-ai-blog-banner.jpg'
import FooterSection from '../components/FooterSection';

const About = () =>{

 return(
    <div className="mainbody pt-7 bg-gradient-custom min-h-screen  flex flex-col gap-10">
    <Navbar/>
    {/* <div className="title flex justify-center">
        <h2 className="text-3xl font-semibold my-5 relative">About Project</h2>
    </div> */}
    <div className='flex flex-col items-center justify-center'>
    <div className="pt1 flex justify-center text-lg">
        
        <div className="right1 bg-gradient-custom flex p-4 text-white">
        <div className="">
            <img src={about1} alt="" className="min-w-[20rem]" />
        </div>
            <div className=' ml-2  '>
            <h2 className=' text-3xl font-bold '>Technology</h2>
            <p>Our crop diseases detection system leverages advanced machine learning
                 algorithms to revolutionize agricultural practices. By employing 
                 state-of-the-art image processing techniques, we enable farmers to 
                 swiftly identify and mitigate crop diseases, safeguarding their yields
                  and livelihoods. Our system utilizes a vast database of annotated 
                  crop images, allowing for accurate diagnosis and proactive pest 
                  management. With real-time monitoring and intuitive user interfaces,
                   farmers can make informed decisions promptly, minimizing crop losses
                    and maximizing productivity.</p>
            </div>
        </div>
    </div>
    <div className="pt2 flex justify-between">
        <div className="left2  bg-gradient-custom p-4 text-white">
        <h2 className=' text-3xl font-bold '>Curing Diseases</h2>
            <p>Built upon cutting-edge research in computer vision and agronomy, our crop diseases detection system integrates seamlessly with existing agricultural practices. Through continuous refinement and feedback from field trials, we have optimized our platform to meet the diverse needs of farmers worldwide. Our commitment to sustainability drives us to not only detect diseases but also to provide insights into preventive measures and sustainable farming practices. With a user-friendly interface accessible via mobile devices and desktops, our system empowers farmers of all backgrounds to make data-driven decisions and ensure the health and resilience of their crops.
                Together, let's cultivate a future where technology nurtures healthier harvests and fosters thriving agricultural communities.</p>
        </div>
        <div className="right2">
            <img src={about2} alt="" className="min-w-[20rem] min-h-[14rem]" />
        </div>
    </div>
   <div className='bottom-0 '>
   
   </div>
   
    </div>
    <FooterSection/>
</div>
 )


}

export default About;