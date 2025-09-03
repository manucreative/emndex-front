import { useEffect, useState } from "react";
// import GlowBoxesSection from "../common/GlowBoxesSection";
import { motion } from "framer-motion";
import { AboutusContent } from "../common/AboutusContent";
import ContactForm from "../common/ContactForm";
import { fetchServices, ServiceResponse } from "../../apiServices/ApiService";
import { useConfig } from "../../context/ConfigProvider";
import { useNavigate } from "react-router";

function About(){
    const [services, setServices] = useState<ServiceResponse[]>([]);
    const { configurations } = useConfig();
    const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
    const Navigate = useNavigate();
    const [hoveredId, setHoveredId] = useState<number | null>(null);
        const loadServices = async () => {
            fetchServices()
              .then((response) => {
                if (response && response.data.length > 0) {
                  const randomServices = response.data
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 5);
        
                  setServices(randomServices);
                }
              })
              .catch((error) => {
                console.error("Error fetching Services", error);
              });
          };
        useEffect(() => {
            loadServices();
            
            // const wow = new WOW({ live: false });
            // wow.init();
          }, []);

          const handleReadMore = (slug: string) =>{
              Navigate(`/home/services/${slug}`)
          }

          const homeContent = configurations?.["about content"] || "";
        const words = homeContent.split(" "); // Split into words
        const limitedContent = words.slice(0, 200).join(" ") + (words.length > 200 ? "..." : "");
    return (
        <div>
        <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(38,39,3)] to-[rgb(9,3,26)] text-white overflow-hidden px-4">
            <div className=" flex container mx-auto  py-8">
                <div className="text-center mb-4">
                    <h3 className="gradient-underline text-3xl font-bold">About Us</h3>
                </div>
                <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="lg:w-1/2 px-0 md:px-4 mt-6 lg:mt-0">
                      <AboutusContent bg={`url('${configUrl}/${configurations?.['about-bg']}')`} content={limitedContent} classData="bg-gradient-to-l from-[#7FDBFF] to-[#00f514] bg-clip-text text-transparent font-bold">
                        <button className="z-10 neon-button relative px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-transparent rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 mt-6 focus:outline-none"
                        onClick={()=> Navigate("/home/about")}>
                            Learn More
                        </button>
                      </AboutusContent>
                  </motion.div>

                  <div className="grid grid-cols-1 gap-6 px-0 md:px-4 py-4">
                      {services.map((service: any, index: any) => (
                        <motion.div
                          key={service.id}
                          data-id={service.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          className="relative bg-transparent border border-transparent rounded-3xl flex flex-col justify-center items-center text-center p-6 overflow-hidden transition-shadow duration-300 cursor-pointer 
                          before:content-[''] before:absolute before:inset-0 before:rounded-lg before:-z-10"
                          style={{
                            boxShadow:
                              hoveredId === service.id
                                ? "0 0 15px rgba(28,255,20,0.733), 5px -5px 20px rgba(255,20,147,0.5)"
                                : service.box_shadow,
                            position: "relative",
                            transition: "box-shadow 0.3s ease-in-out",
                          }}
                          onMouseEnter={() => setHoveredId(service.id)}
                          onMouseLeave={() => setHoveredId(null)}
                        >
                          {/* Dynamic after background */}
                          <div
                            className="absolute w-[270px] h-[230px] rounded-full -top-10 -right-20 pointer-events-none z-0 transition-opacity duration-300"
                            style={{
                              background: service.bg_glow,
                            }}
                          />
                          <div className="w-full flex justify-between items-center">
                            <h4 className="bg-gradient-to-l from-[#7FDBFF] to-[#00f514] bg-clip-text text-transparent text-2xl font-bold">
                              {service.service_title}
                            </h4>
                            <motion.img
                              src={`${configUrl}/storage/${service.service_icon}`}
                              className="w-[60px] h-auto"
                              alt="Icon"
                              animate={{
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.2,
                              }}
                            />
                          </div>
                          <p className="px-2 text-start">
                            {service.service_short_description.length > 180 ? (
                              <>
                                {service.service_short_description.slice(0, 180)}...
                                <span
                                  className="text-blue-500 cursor-pointer hover:underline"
                                  onClick={() => handleReadMore(service.slug)}
                                >
                                  Continue Reading
                                </span>
                              </>
                            ) : (
                              service.service_short_description
                            )}
                          </p>
                        </motion.div>
                      ))}
                    </div>
            </div>
        </section>
        <hr className="neon-gradient-line mx-auto sm:w-1/8" />
        <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#18041e] to-[rgb(9,3,26)] text-white overflow-hidden px-4">
            <ContactForm />
    </section>
        </div>
    )
}

export default About;