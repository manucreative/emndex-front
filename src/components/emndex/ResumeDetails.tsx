/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router";
import Loader from "../common/Loader";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

function ResumeDetails(){
    const [project, setProject] = useState<any | null>(null);
    const STORAGE_URL: string = import.meta.env.VITE_API_STORAGE_URL;
    const location = useLocation();
    const profile = location.state?.profile || null;
    const resumeRef = useRef(null);

    const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
        documentTitle: `${profile?.first_name}_${profile?.last_name}_Resume`,
    });

    if (!profile) {
        return <Loader />;
    }

    return (
      <section className="relative flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(16,2,49)] to-[rgb(9,3,26)] text-white py-12 px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          
          {/* Print/Download PDF Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={handlePrint}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Download PDF
            </button>
          </div>

          {/* Resume Content */}
          <div ref={resumeRef} className="w-full">
            
            {/* ✅ Left Column (Profile, Details, Skills, Education) */}
            <div className="col-span-1 md:col-span-3 md:sticky top-0 self-start">
              {/* Profile Image */}
              <div className="flex justify-center md:justify-start">
                <img 
                  src={`${STORAGE_URL}/${profile.admin_image}`} 
                  alt={profile.first_name} 
                  className="rounded-full w-24 h-24 md:w-36 md:h-36 border-2 border-green-500"
                />
              </div>
  
              {/* Basic Details */}
              <div className="mt-6">
                <h3 className="text-lg md:text-xl font-semibold neon-border">Basic Details</h3>
                <div className="flex flex-col space-y-1 mt-3">
                  <p className="text-green-500">Date Of Birth: <span className="text-white">{profile.dob || "N/A"}</span></p>
                  <p className="text-green-500">ID Number: <span className="text-white">{profile.id_number || "N/A"}</span></p>
                  <p className="text-green-500">Gender: <span className="text-white">{profile.gendar || "N/A"}</span></p>
                  <p className="text-green-500">Marital Status: <span className="text-white">{profile.marital_status || "N/A"}</span></p>
                  <p className="text-green-500">Address: <span className="text-white">Po Box {profile.address}, {profile.city}, {profile.country}</span></p>
                  <p className="text-green-500">Languages: <span className="text-white">{profile.languages.map((lang: any) => lang.language).join(", ")}</span></p>
                  <p className="text-green-500">Interests: <span className="text-white">{profile.interests.map((interest: any) => interest.interest_name).join(", ")}</span></p>
                </div>
              </div>

              {/* Education Section */}
              {profile.education && (
                <div className="mt-6">
                  <h3 className="text-lg md:text-xl font-semibold neon-border">Education</h3>
                  {profile.education.map((educa: any) => (
                    <div key={educa.id} className="mt-3">
                      <h4 className="text-green-500 font-bold">{educa.institution_name}</h4>
                      <p className="text-sm md:text-base">{educa.field_of_study} - {educa.degree} ({educa.start_date} - {educa.end_date})</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
    
            {/* ✅ Right Column (Main Content) */}
            <div className="col-span-1 md:col-span-9 bg-gradient-to-r from-[rgba(243,11,139,0.16)] via-[rgba(4,87,46,0.27)] to-[rgba(13,2,112,0.14)]">
              <div className="space-y-6">
                <div className="relative min-h-[100px] justify-center bg-gradient-to-l from-[rgba(104,89,4,0.32)] via-[rgba(61,1,36,0.27)] to-[rgba(245,107,15,0.21)] text-white overflow-hidden">
                  <h3 className="md:text-5xl text-3xl font-bold text-center">{profile.first_name} {profile.last_name}</h3>
                  <p className="text-xl text-center">{profile.title}</p>
                </div>
                
                <div className="text-left px-4">
                  <h3 className="text-lg md:text-2xl font-semibold neon-border mb-2">PROFESSIONAL PROFILE</h3>
                  <p className="text-lg">{profile.resume.bio}</p>
                </div>

                <div className="text-left px-4">
                  <h3 className="text-lg md:text-2xl font-semibold neon-border mb-2">WORK EXPERIENCE</h3>
                  {profile.experiences.map((experience: any, index: any) => (
                    <div key={index} className="mb-4">
                      <h5 className="text-2xl text-blue-300">{experience.company_name}:</h5>
                      <p className="text-green-500">Job Title: - <span className="text-white"> {experience.position} ({experience.start_date} - {experience.end_date})</span></p>
                      <h5 className="text-xl">Description</h5>
                      <p className="text-sm">{experience.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ResumeDetails;
