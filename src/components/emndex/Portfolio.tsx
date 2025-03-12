import { motion } from "framer-motion";
import Projects from "../portfolio/Projects";
import ProfileSlider from "../portfolio/ProfileSlider";
import { useState } from "react";



export default function TeamCarousel() {
  const [activeSection, setActiveSection] = useState("projects");

  return (
    <>
    <section className="relative min-h-[700px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(16,2,49)] to-[rgb(9,3,26)] text-white py-12">
      <div className=" container w-full">
        <h3 className="text-4xl md:text-6xl font-bold text-center mb-4 neon-text">Emndex Solution Team</h3>
        <h6 className="text-lg md:text-xl font-bold text-center mb-6">Software Development | Full Stack Engineering | Data Analisys</h6>
            <ProfileSlider />
          <hr className="neon-gradient-line mx-auto sm:w-1/8 z-10" />
      </div>
      
    </section>
    <section className="relative min-h-[500px] flex justify-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(30,2,48)] to-[rgb(9,3,26)] text-white overflow-hidden">
    <div className="container mx-auto  py-6">
            {/* Navigation */}
          <nav className="flex justify-center space-x-6 mb-6">
            {["projects", "skills"].map((section) => (
              <button key={section} onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-md neon-border-button ${activeSection === section ? "shadow-[2px_0_15px_rgba(255,20,149,0.83),_2px_-2px_20px_rgba(161,20,255,0.74)]" : "bg-gray-700"}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

      {/* Content Sections (General Team Info) */}
      <div className="">
        {activeSection === "projects" && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             <Projects />
          </motion.section>
        )}
        {activeSection === "skills" && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <p>Technologies and expertise areas covered by the Emndex team.</p>
          </motion.section>
        )}
      </div>
        </div>
    </section>
    </>
  );
}
