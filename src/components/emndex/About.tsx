import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GlowBoxesSection from "../common/GlowBoxesSection";
import { motion } from "framer-motion";
import { AboutusContent } from "../common/aboutusContent";
import ContactForm from "../common/ContactForm";

function About(){
    // const [hoveredBox, setHoveredBox] = useState(null);
    // const [activeBox, setActiveBox] = useState(null);

    // const handleTouch = (index) => {
    //     setActiveBox(activeBox === index ? null : index);
    // };
    // const handleMouseEnter = (index) => setHoveredBox(index);
    // const handleMouseLeave = () => setHoveredBox(null);

    // const [imageSrc, setImageSrc] = useState(
    //     window.innerWidth > 992
    //       ? "/assets/img/services/contact.png"
    //       : "/assets/img/footer2.jpg"
    //   );
    
      useEffect(() => {
        const handleResize = () => {
        //   setImageSrc(
        //     window.innerWidth > 992
        //       ? "/assets/img/services/contact.png"
        //       : "/assets/img/footer2.jpg"
        //   );
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <div>
        <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#18041e] to-[rgb(9,3,26)] text-white overflow-hidden px-4">
            <div className="container mx-auto  py-8">
                <div className="text-center mb-4">
                    <h3 className="gradient-underline text-3xl font-bold">About Us</h3>
                </div>
                <GlowBoxesSection>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="lg:w-1/2 px-4 mt-6 lg:mt-0">
                <AboutusContent />
            </motion.div>
                </GlowBoxesSection>
            </div>
        </section>
        <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#18041e] to-[rgb(9,3,26)] text-white overflow-hidden px-4">
            <ContactForm />
    </section>
        </div>
    )
}

export default About;