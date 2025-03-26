/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router";
import Loader from "../common/Loader";
import { useReactToPrint } from "react-to-print";
import { useEffect, useRef } from "react";

    function ResumeDetails(){
        const STORAGE_URL: string = import.meta.env.VITE_API_STORAGE_URL;

        const location = useLocation();
        const profile = location.state?.profile || null;
        console.log(profile);
        const contentRef = useRef<HTMLDivElement>(null);

        const handlePrint = useReactToPrint({
          contentRef,
          documentTitle: `${profile?.first_name}_${profile?.last_name}_Resume`,
          ignoreGlobalStyles: false,
      });
      useEffect(()=>{
        const style = document.createElement("style");
        style.innerHTML = `
          @media print {
            @page { size: A4; margin: 1cm; }
            .print-container {
              display: grid !important;
              grid-template-columns: 1fr 3fr !important;
              gap: 1rem !important;
            }
          }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
      }, []);

    if (!profile) {
        return <Loader />;
    };

    return (
      <section className="relative flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(16,2,49)] to-[rgb(9,3,26)] text-white py-12 px-4 md:px-6">
        
        <div className="absolute top-1 right-9 mb-6">
            <button
              onClick={() => handlePrint()}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Download PDF
            </button>
          </div>

          <div ref={contentRef}>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 mt-6 md:gap-8 print-container">
              
                    
                  {/* ✅ Left Column (Profile, Details, Skills, Education) */}
                  <div className="col-span-1 md:col-span-4 md:sticky top-0 self-start px-2 py-2  bg-gradient-to-r from-[rgba(114,92,104,0.04)] via-[rgba(63,82,73,0.17)] to-[rgba(13,2,112,0.14)]">
                
                    {/* Profile Image */}
                    <div className="flex justify-center md:justify-start">
                      <img 
                        src={`${STORAGE_URL}/${profile.admin_image}`} 
                        alt={profile.first_name} 
                        className="rounded-full w-24 h-24 md:w-36 md:h-36 border-2 border-green-500"
                      />
                    </div>
            
                    {/* Basic Details */}
                    <div className="mt-1">
                      <h3 className="text-lg md:text-xl font-semibold underline">BASIC DETAILS</h3>
                      <div className="flex flex-col">
                        <p className="text-green-500">Date Of Birth: <span className="text-white">{profile.resume.dob || "N/A"}</span></p>
                        <p className="text-green-500">ID Number: <span className="text-white">{profile.resume.id_no || "N/A"}</span></p>
                        <p className="text-green-500">Gendar: <span className="text-white">{profile.resume.gender || "N/A"}</span></p>
                        <p className="text-green-500">Marital Status: <span className="text-white">{profile.resume.marital_status || "N/A"}</span></p>
                        <p className="text-green-500">Address: <span className="text-white">Po Box {profile.address}, {profile.city}, {profile.country}</span></p>
                        <p className="text-green-500">Languages: <span className="text-white">{profile.languages.map((lang: any) => lang.language).join(", ")}</span></p>
                        <p className="text-green-500">Interests: <span className="text-white">{profile.interests.map((interest: any) => interest.interest_name).join(", ")}</span></p>
                      </div>
                    </div>
            
                    {/* Contact Information */}
                    <div className="mt-2">
                      <h3 className="text-md md:text-xl font-semibold underline">CONTACT</h3>
                      <div className="flex flex-col ">
                        <p className="text-green-500">Email: <span className="text-white">{profile.email}</span></p>
                        <p className="text-green-500">Phone: <span className="text-white">{profile.admin_phone}</span></p>
                        <p className="text-green-500">LinkedIn: <a href={profile.resume.linkedin} className="text-blue-400 hover:underline">{profile.resume.linkedin}</a></p>
                        <p className="text-green-500">Github: <a href={profile.resume.github} className="text-blue-400 hover:underline">{profile.resume.github}</a></p>
                      </div>
                    </div>
            
                    {/* Education Section */}
                    {profile.education?.length > 0 && (
                      <div className="mt">
                        <h3 className="text-lg md:text-xl font-semibold underline">EDUCATION</h3>
                        {profile.education.map((educa: any) => (
                          <div key={educa.id} className="">
                            <h4 className="text-green-500 font-bold">{educa.institution_name}</h4>
                            <p className="edu text-sm md:text-base">{educa.field_of_study} - {educa.degree} ({educa.start_date} - {educa.end_date})</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Education Section */}
                    {profile.certifications?.length > 0 && (
                      <div className="mt-2">
                        <h3 className="text-lg md:text-xl font-semibold underline">CERTIFICATION</h3>
                        {profile.certifications.map((cert: any) => (
                          <div key={cert.id} className="">
                            <h4 className="text-blue-400 font-bold">{cert.certificate_name}</h4>
                            <p className="text-green-500 text-sm">Issued By: <span className="text-white">{cert.issued_by}</span></p>
                            <p className="text-green-500 text-sm">Issued Dat: <span className="text-white">{cert.issue_date}</span></p>

                          </div>
                        ))}
                      </div>
                    )}
                    {profile.expertise?.length > 0 && (
                          <div className="mt-2">
                            <h3 className="text-lg md:text-xl font-semibold underline">AREAS OF EXPERTISE</h3>
                            <ul className="list-decimal ml-4 text-sm">
                              {profile.expertise.map((expert: any, i: any) => (
                                <li key={i} className="ml-6">{expert.expertise_name}</li>
                              ))}
                            </ul>
                        </div>
                    )}
            
                    {/* Awards Section */}
                    {profile.awards?.length > 0 && (
                      <div className="mt-2">
                        <h3 className="text-sm md:text-xl font-semibold underline">AWARDS</h3>
                        {profile.awards.map((award: any) => (
                          <div key={award.id} className="">
                            <h4 className="text-green-500 font-bold">{award.award_name}</h4>
                            <p className="text-green-500 text-sm">Issued By: <span className="text-white">{award.issued_by}</span></p>
                            <p className="text-green-500 text-sm">Date Received: <span className="text-white">{award.date_received}</span></p>
                          </div>
                        ))}
                      </div>
                    )}

                    {profile.skills?.length > 0 && (
                      <div className="mt-1">
                      <h3 className="text-lg md:text-xl font-semibold underline">SKILLS</h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                      {profile.skills.map((skill: any) => (
                      <span 
                          key={skill.id} 
                          className="badge px-2 py-0 bg-transparent border border-blue-700 text-purple-300 text-sm font-semibold rounded-full shadow-md shadow-pink-500/50"
                      >
                          {skill.skill_name}
                      </span>
                      ))}
                  </div>
                  </div>
                    )}
                  </div>
            
                  {/* ✅ Right Column (Main Content) */}
                  <div className="col-span-1 md:col-span-8">
                    <div className="">
                    {profile.first_name?.trim() && (
                      <div className="relative min-h-[100px] justify-center bg-gradient-to-l from-[rgba(104,89,4,0.12)] via-[rgba(61,1,36,0.17)] to-[rgba(245,107,15,0.04)] text-white overflow-hidden">
                          <h3 className="name md:text-5xl text-3xl font-bold text-center">{profile.first_name} {profile.last_name}</h3>
                        <p className=" title text-xl text-center">{profile.title}</p>
                      </div>
                    )}
                      
                      {profile.resume.bio?.trim() && (
                      <div className="text-left px-4 mt-4">
                        <h3 className="text-lg md:text-2xl font-semibold underline">PROFESSIONAL PROFILE</h3>
                        <p className="edu ml-2 text-sm">{profile.resume.bio}</p>
                      </div>
                      )}
                        {profile.experiences?.length > 0 && (
                      <div className="text-left px-4">
                        <h3 className="text-lg md:text-2xl font-semibold underline">WORK EXPERIENCE</h3>
                        {profile.experiences.map((experience: any) => (
                          <div key={experience.id}>
                        <p className="ml-2 title text-2xl text-blue-300">{experience.company_name}:</p>
                        <p className="ml-6 text-green-500">Job Title: - <span className="text-white"> {experience.position} ({experience.start_date} - {experience.end_date})</span></p>
                        
                        <p className="title text-xl">Duties and responsibilities</p>
                        {experience.duties_and_responsibilities?.length > 0 && (
                            <ul className="list-decimal ml-4 text-sm">
                              {experience.duties_and_responsibilities.map((duty: any, i: any) => (
                                <li key={i} className="ml-6">{duty}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                        ))}
                      </div>
                        )
                      }
                    </div>
                  </div>
                </div>
          </div>
        
      </section>
    );
    
      
}

export default ResumeDetails;