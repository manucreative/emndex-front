/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import GlowBoxesSection from "../common/GlowBoxesSection";
import FeaturesSection from "../common/FeaturesSection";
import LaunchPageSection from "../common/LaunchPageSection";
import { AboutusContent } from "../common/AboutusContent";
import { motion } from "framer-motion";
import FAQSection from "../common/FAQSection";
import { useConfig } from "../../context/ConfigProvider";
import { fetchServices, ServiceResponse} from "../../apiServices/ApiService";
import { useNavigate } from "react-router";
import ProfileSlider from "../portfolio/ProfileSlider";


function Home(){
  const { configurations } = useConfig();
    const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;

    const [services, setServices] = useState<ServiceResponse[]>([]);
    const navigate = useNavigate();

    const loadServices = async () => {
        fetchServices()
          .then((response) => {
            if (response && response.data.length > 0) {
              const randomServices = response.data
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);
    
              setServices(randomServices);
            }
          })
          .catch((error) => {
            console.error("Error fetching Services", error);
          });
      };

      const homeContent = configurations?.["about content"] || "";
        const words = homeContent.split(" "); // Split into words
        const limitedContent = words.slice(0, 200).join(" ") + (words.length > 200 ? "..." : "");
    useEffect(() => {
        loadServices();
        
      }, [configurations]);

      
    return (
        <div>
            <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#08041d] to-[rgb(9,3,26)] text-white overflow-hidden">
              {configurations?.["home show-video"] === 'yes' && (
                <>
              <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={`${configUrl}/${configurations?.['home video']}`} type="video/mp4" />
                    Your browser does not support this play.
                  </video>
                  <div className="absolute inset-0 bg-black/40"></div>
                </>
                )}
                {configurations?.["home show-banner"] === 'yes' && (
                  <>
                      <img
                        src={`${configUrl}/${configurations?.["home banner"]}`}
                        alt="Banner"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                      {/* <div className="absolute inset-0 bg-black/40"></div> */}
                    </>
                )}
                <LaunchPageSection />
            </section>

            <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(38,39,3)] to-[rgb(9,3,26)] text-white overflow-hidden px-4">
            <div className="container mx-auto  py-8">
            <div className="text-center mb-4">
                <h3 className="gradient-underline text-3xl font-bold">About Us</h3>
            </div>
            <GlowBoxesSection services={services}>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="lg:w-1/2 px-4 mt-6 lg:mt-0">
              <AboutusContent bg={`url('${configUrl}/${configurations?.['home banner']}')`} content={limitedContent} classData="bg-gradient-to-l from-[#7FDBFF] to-[#00f514] bg-clip-text text-transparent font-bold">
                <button className="z-10 neon-button relative px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-transparent rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 mt-6 focus:outline-none"
                onClick={()=> navigate("/home/about")}>
                    Learn More
                </button>
              </AboutusContent>
          </motion.div>
            </GlowBoxesSection>
            <hr className="neon-gradient-line mx-auto sm:w-1/8" />
        </div>
        
        </section>

        <section className="relative min-h-[700px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(16,2,49)] to-[rgb(9,3,26)] text-white py-12">
              <div className=" container w-full">
                <h3 className="text-4xl md:text-6xl font-bold text-center mb-4 neon-text">Emndex Professional Team</h3>
                <h6 className="text-lg md:text-xl font-bold text-center mb-6">Software Development | Full Stack Engineering | Data Analisys</h6>
                    <ProfileSlider />
              </div>
              
            </section>

        <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(40,3,54)] to-[rgb(9,3,26)] text-white overflow-hidden px-4">
            <FeaturesSection />
        </section>

        <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(3,7,44)] to-[rgb(9,3,26)] text-white overflow-hidden px-4">
            
            <FAQSection />
            
    </section>
    </div>
);
}

export default Home;

