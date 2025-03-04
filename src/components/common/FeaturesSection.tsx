import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { fetchFeatures, GetFeaturesData } from "../../apiServices/ApiService";
import Loader from "../../components/common/Loader";

const FeaturesSection = () => {
  const STORAGE_URL = import.meta.env.VITE_API_STORAGE_URL;
  const [features, setFeatures] = useState<GetFeaturesData[]>([]);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy Load Features when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fetch data only when section is visible
  useEffect(() => {
    if (isVisible && features.length === 0) {
      setLoading(true);
      fetchFeatures()
        .then((featuresData) => {
          if (featuresData) {
            setFeatures(featuresData.data);
          }
        })
        .catch((error) => console.error("Error fetching features:", error))
        .finally(() => setLoading(false));
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="container mx-auto px-6 py-12 max-w-7xl">
      {/* Title */}
      <div className="text-center text-white">
        <h3 className="gradient-underline text-3xl font-bold">Our Features</h3>
      </div>

      {/* Show Loader while fetching */}
      {loading && (
        <div className="flex justify-center py-6">
          <Loader />
        </div>
      )}

      {/* Dynamic Feature Sections */}
      {!loading &&
        features.map((feature, index) => (
          <div
            key={index}
            className={`z-10 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center justify-between ${
              index % 2 === 0 ? "service-righ-bg" : "service-lef-bg"
            } p-6 mt-10 rounded-3xl`}
          >
            {/* Feature Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={`${STORAGE_URL}/${feature.feature_image}`}
              className="w-[500px] mb-4 md:mb-0"
              alt={feature.feature_title}
            />

            {/* Feature Content */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-3xl font-bold">{feature.feature_title}</h1>
              <ul className="list-none mt-4">
                {feature.feature_short_description?.map((point, i) => (
                  <li key={i} className="flex items-center mt-2">
                    ✅ {point}
                  </li>
                ))}
              </ul>
              <button className="neon-button mt-4 z-10 px-4 py-1">Explore More</button>
            </motion.div>
          </div>
        ))}
    </div>
  );
};

export default FeaturesSection;
