/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fetchServices } from "../../apiServices/ApiService";


const GlowBoxesSection = () => {

  
    const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [services, setServices] = useState<any[]>([]);

  const loadServices = async () => {
          fetchServices()
            .then((response) => {
              if (response && response.data.length > 0) {
                setServices(response.data);
              }
            })
            .catch((error) => {
              console.error("Error fetching Services", error);
            });
        };
      useEffect(() => {
          loadServices();
          
        }, []);

 const handleReadMore = (slug: string) =>{
    navigate(`/home/services/${slug}`)
 }

     return (
  <div className="relative w-full px-1 mx-auto py-5">
    {/* Service Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-4 py-4">
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
);

};

export default GlowBoxesSection;
