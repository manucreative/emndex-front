import GlowBoxesSection from "../common/GlowBoxesSection";
import FeaturesSection from "../common/FeaturesSection";
import LaunchPageSection from "../common/LaunchPageSection";
import FAQSection from "../common/FAQSection";
import { useConfig } from "../../context/ConfigProvider";
import ProfileSlider from "../portfolio/ProfileSlider";


function Home(){
  const { configurations } = useConfig();
    const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
      
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
            {configurations?.["home show-about"] === 'yes' && (
                    <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(38,39,3)] to-[rgb(9,3,26)] text-white overflow-hidden md:px-4">
                    <div className="container mx-auto  py-8">
                    <div className="text-center mb-4">
                        <h3 className="gradient-underline text-3xl font-bold">Our Capabilities</h3>
                    </div>
                    <GlowBoxesSection/>
                    <hr className="neon-gradient-line mx-auto sm:w-1/8" />
                </div>
                
                </section>
            )}

        {configurations?.["home show-team"] === 'yes' && (
          <section className="relative min-h-[700px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(16,2,49)] to-[rgb(9,3,26)] text-white py-12">
                <div className=" container w-full">
                  <h3 className="text-4xl md:text-6xl font-bold text-center mb-4 neon-text">Emndex Professional Team</h3>
                  <h6 className="text-lg md:text-xl font-bold text-center mb-6">Software Development | Full Stack Engineering | Data Analisys</h6>
                      <ProfileSlider />
                </div>
                
              </section>
        )}
          {configurations?.["home show-features"] === 'yes' && (
            <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(40,3,54)] to-[rgb(9,3,26)] text-white overflow-hidden md:px-4">
                <FeaturesSection />
            </section>
          )}

    {configurations?.["home show-faqs"] === 'yes' && (
        <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(3,7,44)] to-[rgb(9,3,26)] text-white overflow-hidden md:px-4">
            
              <FAQSection />
              
      </section>
    )}
    </div>
);
}

export default Home;

