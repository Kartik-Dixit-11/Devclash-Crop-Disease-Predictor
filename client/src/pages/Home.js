import HeroSectionOne from "../components/HeroSectionOne";
import FooterSection from "../components/FooterSection";
import InfoSection from "../components/InfoSection";
const Home = () =>{
return(
    <div className="w-full h-full ">
        <HeroSectionOne/>
        {/* <AiSection/> */}
        <InfoSection/>
        <FooterSection />
    </div>
)
}

export default Home;