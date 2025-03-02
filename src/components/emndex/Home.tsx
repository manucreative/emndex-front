import React, { useEffect } from "react";
import GlowBoxesSection from "../common/GlowBoxesSection";
import FeaturesSection from "../common/FeaturesSection";
import LaunchPageSection from "../common/LaunchPageSection";


function Home(){
    useEffect(() => {
        // const wow = new WOW({ live: false });
        // wow.init();
      }, []);

return (
    <div>
        <section className="relative min-h-[500px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#08041d] to-[rgb(9,3,26)] text-white overflow-hidden">
            <LaunchPageSection />
        </section>

        <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#18041e] to-[rgb(9,3,26)] text-white overflow-hidden px-4">
            <GlowBoxesSection />
        </section>

        <section className="relative min-h-[600px] flex justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#18041e] to-[#0a0a32] text-white overflow-hidden px-4">
            <FeaturesSection />
        </section>
    </div>
);
}

export default Home;