/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AboutusContent } from "../common/AboutusContent";
import { fetchServices} from "../../apiServices/ApiService";
import { useConfig } from "../../context/ConfigProvider";
import { useNavigate } from "react-router";

function About(){
    
    const { configurations } = useConfig();
    const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
    const [services, setServices] = useState<any[]>([]);
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
  <div className="container mx-auto py-12">
    
    {/* Section Title */}
    <div className="text-center mb-8">
      <h3 className="gradient-underline text-3xl font-bold">About Us</h3>
    </div>

    {/* Responsive 2 Column Layout */}
    <div className="grid grid-cols-1 gap-8 items-start">
      
      {/* Left Column - About Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full"
      >
        <AboutusContent
          bg={`url('${configUrl}/${configurations?.['about-bg']}')`}
          content={limitedContent}
          classData="bg-gradient-to-l from-[#7FDBFF] to-[#00f514] bg-clip-text text-transparent font-bold"
        >
          <button
            className="z-10 neon-button relative px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-transparent rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 mt-6 focus:outline-none"
            onClick={() => Navigate("/home/about")}
          >
            Learn More
          </button>
        </AboutusContent>
      </motion.div>

      {/* Right Column - Services */}
      <div className="grid grid-cols-1 gap-6 w-full">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            data-id={service.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-transparent border border-transparent rounded-3xl flex flex-col justify-center items-center text-center p-6 overflow-hidden transition-shadow duration-300 cursor-pointer"
            style={{
              boxShadow:
                hoveredId === service.id
                  ? "0 0 15px rgba(28,255,20,0.733), 5px -5px 20px rgba(255,20,147,0.5)"
                  : service.box_shadow,
              transition: "box-shadow 0.3s ease-in-out",
            }}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Glow background */}
            <div
              className="absolute w-[270px] h-[230px] rounded-full -top-10 -right-20 pointer-events-none z-0 transition-opacity duration-300"
              style={{ background: service.bg_glow }}
            />
            
            {/* Service Header */}
            <div className="w-full flex justify-between items-center">
              <h4 className="bg-gradient-to-l from-[#7FDBFF] to-[#00f514] bg-clip-text text-transparent text-xl font-bold">
                {service.service_title}
              </h4>
              <motion.img
                src={`${configUrl}/storage/${service.service_icon}`}
                className="w-[50px] h-auto"
                alt="Icon"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />
            </div>

            {/* Description */}
            <p className="px-2 text-start text-sm mt-2">
              {service.service_short_description.length > 120 ? (
                <>
                  {service.service_short_description.slice(0, 120)}...
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
  </div>
</section>

        </div>
    )
}

export default About;