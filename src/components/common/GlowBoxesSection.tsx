import { motion } from "framer-motion";

const GlowBoxesSection = () => {

    const services = [
        {
          title: "WEB DEVELOPMENT",
          description:
            "We offer the best web development for all kinds. We develop outstanding software to help your business grow.",
          icon: "/assets/img/icons/icon8.png",
          glow: "shadow-[0_0_15px_rgba(255,20,243,0.733),5px_-5px_20px_rgba(255,20,147,0.5)] hover:shadow-[0_0_20px_rgba(20,255,32,0.73),5px_-5px_20px_rgba(169,20,255,0.5)]",
          gradient:
            "before:bg-gradient-to-b before:from-pink-500 before:to-[#09091f]",
          afterGlow:
            "after:bg-[radial-gradient(circle,rgba(16,238,46,0.22),rgba(22,11,41,0.17)_70%)]",
        },
        {
          title: "DATA ANALYSIS",
          description:
            "We analyze your web data to give meaningful insights that help businesses grow and make informed decisions.",
          icon: "/assets/img/icons/icon8.png",
          glow: "shadow-[0_0_15px_rgba(28,255,20,0.733),5px_-5px_20px_rgba(255,20,147,0.5)] hover:shadow-[0_0_20px_rgba(20,255,32,0.73),5px_-5px_20px_rgba(169,20,255,0.5)]",
          gradient:
            "before:bg-gradient-to-b before:from-cyan-400 before:to-[#09091f]",
          afterGlow:
            "after:bg-[radial-gradient(circle,rgba(97,16,238,0.22),rgba(22,11,41,0.17)_70%)]",
        },
        {
          title: "GRAPHIC DESIGN",
          description:
            "We create visually appealing and brand-focused designs to help your business stand out.",
          icon: "/assets/img/icons/icon8.png",
          glow: "shadow-[0_0_15px_rgba(255,20,243,0.733),5px_-5px_20px_rgba(255,20,147,0.5)] hover:shadow-[0_0_20px_rgba(20,255,32,0.73),5px_-5px_20px_rgba(169,20,255,0.5)]",
          gradient:
            "before:bg-gradient-to-b before:from-pink-500 before:to-[#09091f]",
          afterGlow:
            "after:bg-[radial-gradient(circle,rgba(16,238,46,0.22),rgba(22,11,41,0.17)_70%)]",
        },
      ];
      return (
          <div className="relative flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl mx-auto py-5">
            {/* Left Side - Service Cards */}
            <div className="flex flex-col gap-9 w-full lg:w-1/2 px-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative bg-transparent border border-transparent rounded-lg flex flex-col justify-center items-center text-center p-6 overflow-hidden transition-shadow duration-300 cursor-pointer 
                  ${service.glow} before:content-[''] before:absolute before:inset-0 ${service.gradient} before:rounded-lg before:-z-10 
                  after:content-[''] after:absolute after:w-[250px] after:h-[200px] ${service.afterGlow} after:rounded-full 
                  after:-top-10 after:-right-10 after:pointer-events-none after:z-0`}
                >
                  <div className="w-full flex justify-between items-center">
                    <h4 className="text-2xl font-bold text-[#00e40b] flex items-center gap-2">
                      {service.title}
                    </h4>
                    <motion.img 
                    src={service.icon} 
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
                  <p className="px-2 text-start">{service.description}</p>
                </motion.div>
              ))}
            </div>
      
            {/* Right Side - Image and Text */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full lg:w-1/2 px-4 mt-6 lg:mt-0"
            >
              <div className="bg-[rgba(33,3,73,0.4)] border border-[#0fbaee] rounded-lg p-6 shadow-lg text-center">
                <motion.img
                  className="mb-5 w-full max-w-[500px] mx-auto"
                  src="/assets/img/services/tech-phone.png"
                  alt="Tech Phone"
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="font-bold text-lg">
                  <span className="bg-gradient-to-l from-[#7FDBFF] to-[#00f514] bg-clip-text text-transparent text-2xl font-bold">
                    We develop new web applications, analyze your web data, and fix
                    broken websites.
                  </span>
                </div>
                <button className="z-10 neon-button relative px-6 py-3 text-lg font-bold uppercase tracking-wider text-white bg-transparent rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 mt-6 focus:outline-none">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
      );
};

export default GlowBoxesSection;
