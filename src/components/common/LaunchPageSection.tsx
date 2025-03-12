/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { useConfig } from "../../Profiders/ConfigProvider";
const LaunchPageSection: React.FC = () =>{
  const { configurations } = useConfig();
  const typeData = configurations?.["home typewriter"] ? configurations?.["home typewriter"].split(",") : [];
  const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;

    return (
        <div className="container mx-auto px-4 relative z-10">
    <div className="flex justify-center">
      <div className="p-6 text-center">
        <motion.h1 
        initial={{ opacity: 0.3, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="neon-text-2 text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-10">
          {configurations?.["home typewriter"] && (
          <Typewriter
              words={
                typeData
              }
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
              />
            )}
        </motion.h1>

        <motion.img 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="mb-5 w-full sm:w-auto mx-auto" 
          src={`${configUrl}/${configurations?.['advert banner']}`} 
          alt="Vector Design" 
        />

        <div className="w-full overflow-hidden flex items-center">
          <motion.span 
          className="px-3 bg-gradient-to-r from-green-400 to-pink-400 text-transparent bg-clip-text text-2xl justify-center"
          animate={{
            x: ["100%", "10%", "0%","-100%"],
            // opacity: [0, 1, 1, 0],
          }}
          transition={{
            times: [0, 0.2, 0.7, 1],
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          >
            {configurations?.['slide text']}
          </motion.span>
        </div>

        {/* Neon Button */}
        <button className="neon-button relative px-6 py-3 text-lg font-bold uppercase tracking-wider text-white bg-transparent rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg mt-6">
          Learn More
        </button>
      </div>
    </div>

    <hr className="border-none h-[4px] w-full rounded bg-gradient-to-r from-purple-700 via-green-500 to-pink-500 shadow-[0_0_10px_purple,0_0_20px_rgb(241,17,129),0_0_30px_rgb(1,134,1)]" />

  </div>
    )
}

export default LaunchPageSection;