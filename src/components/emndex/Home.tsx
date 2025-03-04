import React, { useEffect } from "react";
import GlowBoxesSection from "../common/GlowBoxesSection";
import FeaturesSection from "../common/FeaturesSection";
import LaunchPageSection from "../common/LaunchPageSection";
import { AboutusContent } from "../common/aboutusContent";
import { motion } from "framer-motion";
import ContactForm from "../common/ContactForm";
import FAQSection from "../common/FAQSection";


function Home(){
    useEffect(() => {
        // const wow = new WOW({ live: false });
        // wow.init();
      }, []);

return (
    <div>
        <section className="relative min-h-[500px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#08041d] to-[rgb(9,3,26)] text-white overflow-hidden">
        
            <LaunchPageSection />
        </section>

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

        <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#18041e] to-[#0a0a32] text-white overflow-hidden px-4">
            <FeaturesSection />
        </section>

        <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#18041e] to-[rgb(9,3,26)] text-white overflow-hidden px-4">
            <FAQSection />
    </section>
    </div>
);
}

export default Home;

