import { motion } from "framer-motion";

export const AboutusContent: React.FC = () =>{
    return (
        <motion.div
          className="relative bg-[rgba(33,3,73,0.4)] border border-[#0fbaee] rounded-lg p-6 shadow-lg text-center overflow-hidden"
        >
          {/* Rotating Background */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/img/services/tech-phone.png')",
            }}
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
    
          {/* Content */}
          <div className="relative z-10">
            <div className="font-bold text-lg">
              <span className="bg-gradient-to-l from-[#7FDBFF] to-[#00f514] bg-clip-text text-transparent text-md font-bold">
                We develop new web applications, analyze your web data, and fix
                broken websites. Integrating the MPESA payment system into our Magento 2 e-commerce platform provided me with invaluable experience in PHP, 
                Magento 2, and API development. This seamless integration significantly boosted the company’s sales after deployment to the live application. My expertise in Magento 2 has grown to an advanced level, 
                giving me the confidence and capability to handle even the most complex and technical projects with efficiency and precision.
                During this project, I successfully built a full integration of the KRA Tax Invoice Management System (TIMS) with the Magento 2 e-commerce platform at Alladin World of Brands. 
                The custom module utilizes Magento 2 APIs to seamlessly connect with KRA’s Total Solution APIs, enabling automatic posting of invoice data to KRA. This ensures that every product 
                ordered on the platform includes the required tax details, ensuring compliance with KRA tax regulations.
              </span>
            </div>
            <button className="z-10 neon-button relative px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-transparent rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 mt-6 focus:outline-none">
              Learn More
            </button>
          </div>
        </motion.div>
      );

}