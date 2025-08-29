import { useEffect, useState } from "react";
import GlowBoxesSection from "../common/GlowBoxesSection";
import { motion } from "framer-motion";
import { AboutusContent } from "../common/AboutusContent";
import ContactForm from "../common/ContactForm";
import { fetchServices, ServiceResponse } from "../../apiServices/ApiService";
import { useConfig } from "../../context/ConfigProvider";

function About(){
    const [services, setServices] = useState<ServiceResponse[]>([]);
    const { configurations } = useConfig();
        const loadServices = async () => {
            fetchServices()
              .then((response) => {
                if (response && response.data.length > 0) {
                  const randomServices = response.data
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 5);
        
                  setServices(randomServices);
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

    return (
        <div>
        <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(38,39,3)] to-[rgb(9,3,26)] text-white overflow-hidden px-4">
            <div className="container mx-auto  py-8">
                <div className="text-center mb-4">
                    <h3 className="gradient-underline text-3xl font-bold">About Us</h3>
                </div>
                <GlowBoxesSection services={services}>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="lg:w-1/2 px-4 mt-4 lg:mt-0">
                <AboutusContent content={configurations?.["about content"]} />
            </motion.div>
                </GlowBoxesSection>
            </div>
        </section>
        <hr className="neon-gradient-line mx-auto sm:w-1/8" />
        <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#18041e] to-[rgb(9,3,26)] text-white overflow-hidden px-4">
            <ContactForm />
    </section>
        </div>
    )
}

export default About;