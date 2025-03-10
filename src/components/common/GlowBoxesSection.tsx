/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

interface GlowBoxProps {
  children?: ReactNode;
  services?: any;
}

const GlowBoxesSection: React.FC<GlowBoxProps> = ({services, children}) => {

    const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleLocations = () =>{
    if(location.pathname === "/home"){
      setCurrentPage("home");
    }
    else if(location.pathname === "/home/about"){
      setCurrentPage("about");
    }
  }
 const handleReadMore = (slug: string) =>{
    navigate(`/home/services/${slug}`)
 }
  useEffect(()=>{
    handleLocations();
  },[])

      return (
          <div className="relative flex flex-col lg:flex-row justify-center w-full px-1 mx-auto py-5">
            {/* Left Side - Service Cards */}
            { currentPage == "about" &&
              children
              }
            <div className="flex flex-col gap-12 w-full lg:w-1/2 px-4 py-4">
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
                    className="w-[60px] h-auto" alt="Icon"
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
                    {service.service_short_description.length > 180
                      ? (
                        <>
                        {service.service_short_description.slice(0, 180)}...
                        <span className="text-blue-500 cursor-pointer hover:underline"
                        onClick={() => handleReadMore(service.slug)}>
                          Continue Reading
                        </span>
                      </>
                      )
                      : (
                        service.service_short_description
                      )}
                  </p>
                </motion.div>
              ))}
            </div>
                    {/* Right Side - Image and Text */}
              { currentPage == "home" &&
              children
              }
        </div>
      );
};

export default GlowBoxesSection;
