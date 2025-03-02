import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {fetchFeatures, GetFeaturesData } from "../../apiServices/ApiService";


const services = [
  {
    title: "Custom Web & Software Development",
    description: [
      "Tailor-made web applications, e-commerce platforms, and SaaS solutions using Laravel, React, and Magento 2.",
      "Scalable and secure backend systems with API development and third-party integrations.",
    ],
    imgSrc: "/assets/img/services/teach.png",
  },
  {
    title: "API Development & Integration",
    description: [
      "Custom RESTful and GraphQL APIs for seamless system communication.",
      "Secure payment gateway integration (MPESA, Stripe, PayPal).",
      "Third-party API connections for CRM, ERP, and other platforms.",
    ],
    imgSrc: "/assets/img/services/tech-phone.png",
  },
  {
    title: "Data Analysis & Visualization",
    description: [
      "Advanced data analytics to uncover business insights and trends.",
      "Custom dashboard and visualization solutions with real-time updates.",
    ],
    imgSrc: "/assets/img/services/teach.png",
  },
];

const FeaturesSection = () => {

  const STORAGE_URL = import.meta.env.VITE_API_STORAGE_URL;
  const [features, setFeatures] = useState<GetFeaturesData[]>([]);

  const LoadFeatures = async() =>{
    try {
      const featuresData = await fetchFeatures();
      if(featuresData){
        setFeatures(featuresData.data);
        console.log(features);
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    LoadFeatures();
  },[]);
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Title */}
      <div className="text-center text-white">
        <h3 className="gradient-underline text-3xl font-bold">Emndex Features</h3>
      </div>

      {/* Dynamic Service Sections */}
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center justify-between ${
            index % 2 === 0 ? "service-right-bg" : "service-left-bg"
          } p-6 mt-10 rounded-3xl`}
        >
          {/* feature Image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={`${STORAGE_URL}/${feature.feature_image}`}
            className="w-[500px] mb-4 md:mb-0"
            alt={feature.feature_title}
          />

          {/* Service Content */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="gradient-underline text-2xl font-bold">{feature.feature_title}</h1>
            <ul className="list-none mt-4">
              {feature.feature_short_description?.map((point, i) => (
                <li key={i} className="flex items-center mt-2">
                  ✅ {point}
                </li>
              ))}
            </ul>
            <button className="neon-border-button mt-4">Explore More</button>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
