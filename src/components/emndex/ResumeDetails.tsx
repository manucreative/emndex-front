/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router";
import Loader from "../common/Loader";
import { useEffect, useState } from "react";

    function ResumeDetails(){
        const [project, setProject] = useState<any | null>(null);
        const STORAGE_URL: string = import.meta.env.VITE_API_STORAGE_URL;

        const location = useLocation();
        const profile = location.state?.profile || null;
        console.log(profile);

    if (!profile) {
        return <Loader />;
    }
    
      
    return (
      <section className="relative flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[rgb(16,2,49)] to-[rgb(9,3,26)] text-white py-12 px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
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
                <p className="text-green-500">Gendar: <span className="text-white">{profile.gendar || "N/A"}</span></p>
                <p className="text-green-500">Marital Status: <span className="text-white">{profile.marital_status || "N/A"}</span></p>
                <p className="text-green-500">Address: <span className="text-white">Po Box {profile.address}, {profile.city}, {profile.country}</span></p>
                <p className="text-green-500">Languages: <span className="text-white">{profile.languages.map((lang: any) => lang.language).join(", ")}</span></p>
                <p className="text-green-500">Interests: <span className="text-white">{profile.interests.map((interest: any) => interest.interest_name).join(", ")}</span></p>
              </div>
            </div>
    
            {/* Contact Information */}
            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold neon-border">Contact Information</h3>
              <div className="flex flex-col space-y-1 mt-3">
                <p className="text-green-500">Email: <span className="text-white">{profile.email}</span></p>
                <p className="text-green-500">Phone: <span className="text-white">{profile.admin_phone}</span></p>
                <p className="text-green-500">LinkedIn: <a href={profile.resume.linkedin} className="text-blue-400 hover:underline">{profile.resume.linkedin}</a></p>
                <p className="text-green-500">Github: <a href={profile.resume.github} className="text-blue-400 hover:underline">{profile.resume.github}</a></p>
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

            {/* Education Section */}
            {profile.certifications && (
              <div className="mt-6">
                <h3 className="text-lg md:text-xl font-semibold neon-border">Certification</h3>
                {profile.certifications.map((cert: any) => (
                  <div key={cert.id} className="mt-3">
                    <h4 className="text-blue-400 font-bold">{cert.certificate_name}</h4>
                    <p className="text-green-500 text-sm">Issued By: <span className="text-white">{cert.issued_by}</span></p>
                    <p className="text-green-500 text-sm">Issued Dat: <span className="text-white">{cert.issue_date}</span></p>

                  </div>
                ))}
              </div>
            )}
    
            {/* Awards Section */}
            {profile.awards && (
              <div className="mt-6">
                <h3 className="text-lg md:text-xl font-semibold neon-border">Awards</h3>
                {profile.awards.map((award: any) => (
                  <div key={award.id} className="mt-3">
                    <h4 className="text-green-500 font-bold">{award.award_name}</h4>
                    <p className="text-green-500 text-sm">Issued By: <span className="text-white">{award.issued_by}</span></p>
                    <p className="text-green-500 text-sm">Date Received: <span className="text-white">{award.date_received}</span></p>
                  </div>
                ))}
              </div>
            )}

            {profile.skills && (
              <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold neon-border">Skills</h3>
               <div className="flex flex-wrap gap-2 mt-3">
               {profile.skills.map((skill: any, index: any) => (
               <span 
                   key={skill.id} 
                   className="px-3 py-1 bg-transparent border border-pink-500 text-purple-300 text-sm font-semibold rounded-full shadow-md shadow-pink-500/50"
               >
                   {skill.skill_name}
               </span>
               ))}
           </div>
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
                <h3 className="text-lg md:text-2xl font-semibold neon-border mb-2 ">WORK EXPERIENCE</h3>
                {profile.experiences.map((experience: any, index: any) => (
                  <div>
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
      </section>
    );
    
      
}

export default ResumeDetails;