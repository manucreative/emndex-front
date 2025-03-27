import { motion } from "framer-motion";
import Projects from "../portfolio/Projects";
import ProfileSlider from "../portfolio/ProfileSlider";
import { useState } from "react";
import ContactForm from "../common/ContactForm";



export default function TeamMembers() {

  return (
    <>
    <section className="relative min-h-[700px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(16,2,49)] to-[rgb(9,3,26)] text-white py-12">
      <div className=" container w-full">
        <h3 className="text-4xl md:text-6xl font-bold text-center mb-4 neon-text">Emndex Professional Team</h3>
        <h6 className="text-lg md:text-xl font-bold text-center mb-6">Software Development | Full Stack Engineering | Data Analisys</h6>
            <ProfileSlider />
            <ContactForm />
      </div>
      
    </section>
    </>
    );

}
