import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import { fetchAllProjects} from "../../apiServices/ApiService";
import Loader from "../common/Loader";

// const projects = [
//   { id: 1, title: "E-Commerce Platform", slug: "e-commerce-platform", image: "/assets/img/passprt.jpg" },
//   { id: 2, title: "Sacco Management System", slug: "sacco-management-system", image: "/assets/img/services/vector1-l.png" },
//   { id: 3, title: "Food Ordering App", slug: "food-order-app", image: "/assets/img/services/teach.png" },
//   { id: 4, title: "AI Data Analysis Tool", slug: "ai-data-analysis-tool", image: "/assets/img/footer2.jpg" },
//   { id: 5, title: "Data Analysis Tool", slug: "data-analysis-tool", image: "/assets/img/footer2.jpg" },
// ];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // Stagger effect for child elements
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 }, // Starts smaller & invisible
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  // const sectionRef = useRef<HTMLDivElement | null>(null);
  // const [isVisible, setIsVisible] = useState(false);
  const STORAGE_URL: string = import.meta.env.VITE_API_STORAGE_URL;

  const [projects, setProjects] = useState<any[] | null>([]);

  // const loadProjects = async () => {
    
  // }
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //       }
  //     },
  //     { threshold: 0.2 }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  useEffect(()=>{
      // setLoading(true);

      fetchAllProjects()
      .then((response)=>{
        if (response) {
        setProjects(response);
        }
      })
      .catch((error)=>{
          console.error("Error fetching projects: ", error);
      })
        .finally(()=>{
          // setLoading(false)

          console.log(projects)
    });
  },[]);

  if(!projects) return <Loader />

  return (
    <div className="relative w-full overflow-hidden p-4 justify-center items-center">
      
      {/* Left Column - Project Description */}
      <div className="w-full items-center justify-center p-4 text-center">
        <h2 className="xl:text-7xl lg:text-6xl md:text-4xl text-3xl light-blue-text font-semibold mb-5">
          Projects Executed by Emndex Team
        </h2>
        <p className="md:text-xl lg:text-2xl text-lg">
          Showcase of completed and ongoing projects by Emndex Solution Ltd.
          We are 100% able to build your project from scratch to production.
        </p>
      </div>

      {/* Portfolio Gallery with Scroll Animation */}
      <motion.div
        ref={ref}
        className="w-full flex flex-col justify-center text-left p-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div className="grid grid-cols-2 md:grid-cols-3  gap-0">
          {projects?.map((project, index) => (
            <motion.div
            whileHover={{scale: 1.01}}
              key={project.id}
              className={`relative group flex items-center py-12 justify-center border-[0.3px] text-white text-center cursor-pointer overflow-hidden transition-all duration-500 border-[rgba(20,255,255,0.99)]
                ${index % 4 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}`}
              variants={itemVariants} // Apply animation variants
              
            >
              {/* Background Image with Dark Overlay */}
              <motion.div
                className="absolute inset-0 opacity-[0.1] bg-cover bg-center transition-opacity duration-500 group-hover:opacity-80"
                style={{
                  backgroundImage: `url(${STORAGE_URL}/${project.cover_image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.6)",
                }}
                
              />

              {/* Foreground - Project Title & Arrow */}
              <motion.div className="relative z-10 flex flex-col items-center transition-opacity duration-500 group-hover:opacity-100"
              onClick={()=> navigate(`/home/portfolio/projects/${project.slug}`)}
              
              >
                <h3 className="text-xl md:text-3xl font-semibold group-hover:text-white">
                  {project.title}
                </h3>
                <motion.div
                  initial={{ x: -10 }}
                  animate={{ x: 10 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.8,
                  }}
                  
                  className="mt-2 text-4xl text-pink-400 group-hover:text-white"
                >
                  <FaArrowRight />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
