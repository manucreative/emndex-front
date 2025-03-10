import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AboutProps{
  content?: string;
  children?: ReactNode;
  bg?: any;
  classData?: any;
}
export const AboutusContent: React.FC<AboutProps> = ({content, bg, classData, children}) =>{
    return (
        <motion.div
          className="relative bg-[rgba(33,3,73,0.4)] border border-[#0fbaee] rounded-lg mt-4 p-6 shadow-lg overflow-hidden"
        >
          {/* Rotating Background */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: bg
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
            <div className="text-lg">
              <span className={`${classData} text-md`}>
                {content}
              </span>
            </div>
            <div className="text-center">
            {children}
            </div>
          </div>
        </motion.div>
      );

}