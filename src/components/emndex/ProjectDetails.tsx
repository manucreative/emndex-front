/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router";
import Loader from "../common/Loader";
import { projectDetails } from "../../apiServices/ApiService";
import { useEffect, useState } from "react";

    function ProjectDetails(){
        const { slug } = useParams();
        const [project, setProject] = useState<any | null>(null);
        const STORAGE_URL: string = import.meta.env.VITE_API_STORAGE_URL;
 const loadProjectDetails = async() =>{
        projectDetails(slug ?? "")
              .then((response)=>{
                if (response) {
                setProject(response);
                }
              })
              .catch((error)=>{
                  console.error("Error fetching projects: ", error);
              })
                .finally(()=>{
        
                  console.log(project)
            });
          }
            useEffect(()=>{
              loadProjectDetails();
            },[slug]);

    if (!project) {
        return <Loader />;
    }
    
      
    return (
        <section className="relative flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(16,2,49)] to-[rgb(9,3,26)] text-white py-12 px-6">
          <div className="container mx-auto grid grid-cols-12 gap-8">
            {/* ✅ Left Column (Title, Description, Skills, Deliverables) */}
            <div className="col-span-12 md:col-span-3 md:sticky top-0 self-start md:py-24">
              <h2 className="text-4xl font-bold neon-text">{project.title}</h2>
              <p className="text-lg text-gray-400 mt-2">{project.description}</p>
      
              <div className="mt-6">
                <h3 className="text-2xl font-semibold neon-border">Skills Used</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                    {project.skills.map((skill: any, index: any) => (
                    <span 
                        key={index} 
                        className="px-3 py-1 bg-transparent border border-pink-500 text-purple-300 text-sm font-semibold rounded-full shadow-md shadow-pink-500/50"
                    >
                        {skill}
                    </span>
                    ))}
                </div>
              </div>
      
              <div className="mt-6">
                <h3 className="text-2xl font-semibold neon-border">Deliverables</h3>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  {project.deliverables.map((item: any, index: any) => (
                    <li key={index} className="text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
      
            {/* ✅ Right Column (Media & About Project) */}
            <div className="col-span-12 md:col-span-9">
              {/* Media Section */}
              <div className="space-y-6">
                {project.media.map((item: any, index: any) => (
                  <div key={index} className="bg-[rgb(16,2,49)] shadow-neon p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mt-2 neon-text mb-2 text-center">{item.title}</h4>
                    {item.type === "image" ? (
                      <img src={`${STORAGE_URL}/${item.url}`} alt={item.title} className="rounded-lg w-full" />
                    ) : (
                      <video controls className="rounded-lg w-full">
                        <source src={`${STORAGE_URL}/${item.url}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    <p className="text-white text-center mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
      
              {/* About the Project */}
              <h3 className="text-2xl md:text-3xl font-semibold mt-8 neon-border">About the Project</h3>
              <p className="text-gray-400 mt-2 text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: project.aboutProject }}></p>
            </div>
          </div>
        </section>
      );
      
}

export default ProjectDetails;