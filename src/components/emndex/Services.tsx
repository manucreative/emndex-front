/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchServices} from "../../apiServices/ApiService";
import { useNavigate } from "react-router";




export default function Services() {
  const [hoveredBox, setHoveredBox] = useState(null);
  const [activeBox, setActiveBox] = useState(null);

  const [services, setServices] = useState<any[]>([]);
    const navigate = useNavigate();
      const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;

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
        
        // const wow = new WOW({ live: false });
        // wow.init();
      }, []);


  const handleTouch = (id: any) => {
    setActiveBox(activeBox === id ? null : id);
  };

  return (
    <section className="relative min-h-[500px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#08041d] to-[rgb(9,3,26)] text-white overflow-hidden">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {services.map((service, index) => (
        <motion.div
            key={service.id}
            className={`p-8 text-center cursor-pointer shadow-lg`}
            style={{ 
              borderTopLeftRadius: "70px",
              borderBottomRightRadius: "0px",
              borderTopRightRadius: "70px",
              // border: "2px solid #0c9fcc",
              background: service.bg_glow,
              boxShadow: service.box_shadow,
              overflow: "hidden", // Prevent content overflow
              transition: "all 0.3s ease-in-out",
             }}
           whileHover={{ scaleX: 1.15 }} 
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHoveredBox(service.id)}
            onMouseLeave={() => setHoveredBox(null)}
            onTouchStart={() => handleTouch(service.id)}
            initial={{ scale: 0.6, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
        >
            {hoveredBox === service.id || activeBox === service.id ? (
            <div>
                <h4 className="text-2xl font-bold neon-text-2 mb-2">{service.service_title}</h4>
                <p className="text-white text-md">{service.service_short_description}</p>
                <button className="neon-border-button mt-4 px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition"
                onClick={()=> navigate(`/home/services/${service.slug}`)}>
                Learn More
                </button>
            </div>
            ) : (
            <>
                <motion.img
                src={`${configUrl}/storage/${service.service_icon}`}
                alt={service.service_title}
                className="mb-2 neon-image w-20 mx-auto"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
                <h4 className="text-xl font-bold neon-text-2">{service.service_title} 🚀</h4>
            </>
            )}
        </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
}
