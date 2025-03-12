/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router";
import Loader from "../common/Loader";
import { projectDetails } from "../../apiServices/ApiService";
import { useEffect, useState } from "react";

// const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       slug: "e-commerce-platform",
//       media: [
//         {
//           type: "image",
//           url: "/assets/img/dash.png",
//           title: "User-friendly UI",
//           description: "A sleek and responsive UI for seamless shopping.",
//         },
//         {
//           type: "image",
//           url: "/assets/img/home.png",
//           title: "Secure Payment Gateway",
//           description: "Integrated multiple payment gateways, including MPESA.",
//         },
//         {
//           type: "video",
//           url: "/assets/videos/ecommerce-demo.mp4",
//           title: "Demo Walkthrough",
//           description: "Watch how our E-Commerce platform works.",
//         },
//       ],
//       description: "An advanced online shopping platform with multi-vendor support.",
//       aboutProject: `
//         This project was designed to help businesses launch online stores efficiently. 
//         It includes a dynamic admin panel, seamless checkout experience, 
//         and integration with payment providers like PayPal, Stripe, and MPESA.
//       `,
//       skills: ["React.js", "Laravel", "MPESA API", "Stripe", "Tailwind CSS"],
//       deliverables: ["Fully functional website", "Admin dashboard", "Payment gateway integration"],
//     },
//     {
//       id: 2,
//       title: "Sacco Management System",
//       slug: "sacco-management-system",
//       media: [
//         {
//           type: "image",
//           url: "/assets/img/sacco1.jpg",
//           title: "Member Dashboard",
//           description: "Easy access to loan applications, savings, and transactions.",
//         },
//         {
//           type: "video",
//           url: "/assets/videos/sacco-demo.mp4",
//           title: "Sacco System Demo",
//           description: "An overview of how members and admins interact in the system.",
//         },
//       ],
//       description: "A powerful platform for managing Sacco members and finances.",
//       aboutProject: `
//         The Sacco Management System automates financial transactions, 
//         loan approvals, and member contributions, ensuring transparency 
//         and efficiency in cooperative societies.
//       `,
//       skills: ["Laravel", "PHP", "Vue.js", "MySQL", "Bootstrap"],
//       deliverables: ["Web portal", "Member management system", "Loan processing automation"],
//     },
//     {
//       id: 3,
//       title: "Food Ordering App",
//       slug: "food-order-app",
//       media: [
//         {
//           type: "image",
//           url: "/assets/img/foodapp1.jpg",
//           title: "Menu Display",
//           description: "Interactive UI for browsing and ordering food items.",
//         },
//         {
//           type: "image",
//           url: "/assets/img/foodapp2.jpg",
//           title: "Order Tracking",
//           description: "Real-time order tracking and notifications.",
//         },
//         {
//           type: "video",
//           url: "/assets/videos/foodapp-demo.mp4",
//           title: "Live Ordering System",
//           description: "See how users can order food and track deliveries in real time.",
//         },
//       ],
//       description: "A food ordering and delivery system for restaurants.",
//       aboutProject: `
//         This app allows users to browse restaurant menus, place orders, 
//         and track deliveries. It features an admin dashboard for restaurant 
//         owners to manage menus and orders.
//       `,
//       skills: ["React Native", "Node.js", "Express", "Firebase", "MongoDB"],
//       deliverables: ["Mobile app", "Order tracking system", "Restaurant management portal"],
//     },
//   ];
    function ProjectDetails(){
        const { slug } = useParams();
        const [project, setProject] = useState<any | null>(null);
 const loadProjectDetails = async() =>{
        projectDetails(slug)
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
            <div className="col-span-12 md:col-span-3 md:sticky top-0 self-start">
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
                      <img src={item.url} alt={item.title} className="rounded-lg w-full" />
                    ) : (
                      <video controls className="rounded-lg w-full">
                        <source src={item.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    <p className="text-white text-center mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
      
              {/* About the Project */}
              <h3 className="text-2xl md:text-3xl font-semibold mt-8 neon-border">About the Project</h3>
              <p className="text-gray-400 mt-2 text-lg md:text-xl">{project.aboutProject}</p>
            </div>
          </div>
        </section>
      );
      
}

export default ProjectDetails;