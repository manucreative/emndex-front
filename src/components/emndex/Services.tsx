import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Software Development",
    description:
      "We build scalable web applications from scratch to large-scale systems within a short period. Our customers are always happy. We thoroughly analyze your application data to ensure everything is well-structured and optimized.",
    icon: "/assets/img/icons/icon11.png",
    bgStyle: {
      borderTopLeftRadius: "40px",
      borderBottomRightRadius: "40px",
      border: "2px solid #0c9fcc",
      background: "radial-gradient(circle, rgba(24, 250, 4, 0.14), rgba(244, 2, 252, 0) 80%)",
    },
  },
  {
    id: 2,
    title: "Data Analysis",
    description:
      "We thoroughly analyze your application data to ensure everything is well-structured and optimized.",
    icon: "/assets/img/icons/icon10.png",
    bgStyle: {
      borderTopLeftRadius: "40px",
      borderBottomRightRadius: "40px",
      border: "2px solid #0c9fcc",
      background: "radial-gradient(circle, rgba(164, 9, 236, 0.16), rgba(20, 8, 41, 0.021) 80%)",
    },
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "We provide top-tier graphic design services, including logos, banners, image enhancements, and motion graphics.",
    icon: "/assets/img/icons/icon10.png",
    bgStyle: {
      borderTopLeftRadius: "40px",
      borderBottomRightRadius: "40px",
      border: "2px solid #0c9fcc",
      background: "radial-gradient(circle, rgba(247, 223, 4, 0.16), rgba(20, 8, 41, 0.021) 80%)",
    },
  },
  {
    id: 4,
    title: "Web Design",
    description:
      "We specialize in creating stunning, user-friendly websites that elevate your brand and online presence.",
    icon: "/assets/img/icons/icon7.png",
    bgStyle: {
      borderTopLeftRadius: "40px",
      borderBottomRightRadius: "40px",
      border: "2px solid #0c9fcc",
      background: "radial-gradient(circle, rgba(247, 4, 97, 0.16), rgba(20, 8, 41, 0.021) 80%)",
    },
  },
];

export default function Services() {
  const [hoveredBox, setHoveredBox] = useState(null);
  const [activeBox, setActiveBox] = useState(null);

  const handleTouch = (id) => {
    setActiveBox(activeBox === id ? null : id);
  };

  return (
    <section className="relative min-h-[500px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#08041d] to-[rgb(9,3,26)] text-white overflow-hidden">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <motion.div
            key={service.id}
            className="p-6 text-center cursor-pointer shadow-lg"
            style={service.bgStyle}
            // whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHoveredBox(service.id)}
            onMouseLeave={() => setHoveredBox(null)}
            onTouchStart={() => handleTouch(service.id)}
            initial={{ scale: 0.8, opacity: 1 }} // Start small & transparent
            animate={{ scale: 1, opacity: 1 }} // Zoom in & fade in
            exit={{ scale: 0.8, opacity: 0 }} // Zoom out on exit
            transition={{ duration: 0.6, 
              delay: index * 0.5,
              ease: "easeOut" 
            }} // Smooth animation
        >
            {hoveredBox === service.id || activeBox === service.id ? (
            <div>
                <h4 className="text-2xl font-bold neon-text-2 mb-2">{service.title}</h4>
                <p className="text-white text-md">{service.description}</p>
                <button className="neon-border-button mt-4 px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
                Explore More
                </button>
            </div>
            ) : (
            <>
                <motion.img
                src={service.icon}
                alt={service.title}
                className="mb-2 neon-image w-20 mx-auto"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
                <h4 className="text-xl font-bold neon-text-2">{service.title} 🚀</h4>
            </>
            )}
        </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
}
