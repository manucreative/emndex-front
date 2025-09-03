/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { useConfig } from "../../context/ConfigProvider";
import { Link } from "react-router";
const LaunchPageSection: React.FC = () =>{
  const { configurations } = useConfig();
  const typeData = configurations?.["home typewriter"] ? configurations?.["home typewriter"].split(",") : [];
  const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;

    return (
        <div className="container mx-auto px-4 relative z-10">
    <div className="flex justify-center">
      <div className="p-6 text-center">

          {configurations?.["home show-typewriter"] === 'yes' && (
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
          )}
      {configurations?.["home show-advert-banner"] === 'yes' && (
            <motion.img 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              className="mb-5 w-full sm:w-auto mx-auto" 
              src={`${configUrl}/${configurations?.['advert banner']}`} 
              alt="Vector Design" 
            />
          )}
          {configurations?.["home show-learn-btn"] === 'yes' && (
            <Link 
                to={configurations?.['home btn-url']}
                className="neon-button relative px-6 py-3 text-lg font-bold uppercase tracking-wider text-white bg-transparent rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg mt-6"
              >
                {configurations?.['home btn-text']}
              </Link>
          )}
      </div>
    </div>
          {configurations?.["home show-hr"] === 'yes' && (
            <hr className="border-none h-[4px] w-full rounded bg-gradient-to-r from-purple-700 via-green-500 to-pink-500 shadow-[0_0_10px_purple,0_0_20px_rgb(241,17,129),0_0_30px_rgb(1,134,1)]" />
          )}
  </div>
    )
}

export default LaunchPageSection;