/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { fetchUsers, UserResponse } from "../../apiServices/ApiService";
import { useNavigate } from "react-router";


const ProfileSlider: React.FC = () => {
  
  const [profiles, setProfiles] = useState<UserResponse[]>([]);
     const [index, setIndex] = useState(0);
      const [direction, setDirection] = useState(1);
      const STORAGE_URL: string = import.meta.env.VITE_API_STORAGE_URL;

      const navigate = useNavigate();
      const nextProfile = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % profiles.length)};
      const prevProfile = () => {
        setDirection(-1)
        setIndex((prev) => (prev - 1 + profiles.length) % profiles.length)};
    
        const moveToResume = (id?: string, firstName?: string, lastName?: string, title?: string) => {
          if (!id || !firstName || !lastName) return; // Prevent errors
      
          const resumeDetails = profiles.find((profile) => profile.id === id);
          if (resumeDetails) {
            // const bio = `${title}`.toLowerCase().replace(/\s+/g, "-");
            const slug = `${firstName}-${lastName}`.toLowerCase().replace(/\s+/g, "-");
            navigate(`/home/team/${slug}`, { state: { profile: resumeDetails } });
          }
        };
      

      useEffect(() => {
        const loadUsers = async () => {
          try {
            const response = await fetchUsers();
            setProfiles(response);
          } catch (error) {
            console.error("Error Loading users", error);
          }
        };
        loadUsers();
      }, []);
    
      // Auto-slide every 7 seconds
      useEffect(() => {
        if (profiles.length === 0) return; // Prevent running when profiles are empty
    
        const interval = setInterval(nextProfile, 7000);
        return () => clearInterval(interval);
      }, [profiles]);

      if (profiles.length === 0) return <p>Loading profiles...</p>; // Handle empty state

        const currentProfile = profiles[index];

    return (             
        <div className="flex items-center justify-center space-x-4 mb-10">
          {/* Left Button */}
          <button
            onClick={prevProfile}
            className="hidden md:block p-2 text-white text-2xl hover:text-gray-400"
          >
            <FaChevronLeft />
          </button>

          {/* Carousel */}
          <div className="relative w-full max-w-full  overflow-hidden p-4">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentProfile.id}
                className="relative bg-[rgba(71,4,102,0.10)] border rounded-3xl border-transparent flex flex-col md:flex-row justify-center items-center text-center md:text-left p-6 overflow-hidden transition-shadow duration-300 cursor-pointer
                  before:content-[''] before:absolute before:inset-0 before:rounded-lg before:-z-10 pointer-events-none z-0 transition-opacity duration-300"
                style={{ 
                  boxShadow: "0 0 15px rgba(255, 20, 149, 0.53), 5px -5px 20px rgba(161, 20, 255, 0.24)",
                }}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 100 }}
                transition={{ duration: 0.6 }}
              >
                {/* Left Column - Profile Info */}
                <div className="w-full md:w-1/2 flex flex-col items-center text-center">
                  <motion.img
                    src={`${STORAGE_URL}/${currentProfile.admin_image}`}
                    alt={currentProfile.first_name}
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-blue-500"
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                  />
                    <motion.h2 className="text-xl md:text-2xl font-bold mt-2"
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    >
                    {currentProfile.first_name}
                    </motion.h2>
                  <p className="text-md md:text-lg text-gray-300">{currentProfile.title}</p>
                  <h3 className="text-lg md:text-xl font-bold mt-2">{currentProfile.education?.map((edu)=>(edu.institution_name))}</h3>
                  <button
                    className="mt-4 px-4 py-2 md:px-6 md:py-3 neon-button relative z-10 pointer-events-auto"
                    onClick={() => moveToResume(currentProfile.id, currentProfile.first_name, currentProfile.last_name, currentProfile.title)}
                  >
                    Find My Profile
                  </button>

                </div>

                {/* Right Column - Description */}
                <div className="w-auto md:w-1/2 flex flex-col justify-center px-6 text-left mt-4 md:mt-0">
                  <h3 className="neon-text-2 gradient-underline mb-6 text-lg md:text-3xl">Professional Profile</h3>
                  <p className="text-sm md:text-lg text-gray-300">{currentProfile.resume?.bio}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Button (Hidden on Small Screens) */}
          <button
            onClick={nextProfile}
            className="hidden md:block p-2 text-white text-2xl hover:text-gray-400"
          >
            <FaChevronRight />
          </button>
        </div>
    );
}

export default ProfileSlider;