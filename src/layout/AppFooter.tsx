import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useConfig } from "../context/ConfigProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faDribbble, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function AppFooter() {
  const [currentDate, setCurrentDate] = useState(2025);
  const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
  const { configurations } = useConfig();

  useEffect(() => {
    setCurrentDate(new Date().getFullYear());
  }, []);

  return (
    <div>
      {/* Banner Section */}
      {configurations?.["footer show footer header"] === "yes" && (
      <section 
          className="relative bg-cover bg-center py-16 text-center text-white z-0 h-[400px] " 
                style={{ backgroundImage: `url('/assets/img/footer-banner.jpg')` }}>
                <div className="container mx-auto px-6">
                  <h1 className="text-4xl font-bold gradient-text">{configurations?.["footer head"]}</h1>
                  <h4 className=" text-3xl mt-2">{configurations?.["footer sub head"]}</h4>
                  <hr className="neon-gradient-line mx-auto sm:w-1/4" />
                  <Link to="/home/contact" className="neon-border-button inline-block px-6 py-2 mt-10">Request a Quote</Link>
                </div>
      </section>
      )}

      {/* Footer Section */}
      <footer 
  className="relative min-h-[400px] flex flex-col justify-center items-center bg-gradient-to-b from-[rgb(11,2,63)] via-[rgb(5,9,46)] to-[rgb(9,3,26)] text-white overflow-hidden px-4">
  <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-4">
    
    {/* Company Info */}
    <div>
    {configurations?.["system logo"] &&(
      <img src={`${configUrl}/${configurations["system logo"]}`} 
      alt="system logo"
      width={170}
      height={40} />
    )}
      <p className="mt-4">{configurations?.["footer content"]}</p>
      {configurations?.["social media enabled"] === "yes" && (
        <div className="flex space-x-4 mt-4">
        <Link to={`https://facebook.com/${configurations?.["facebook username"]}`} className="social-icon"><FontAwesomeIcon icon={faFacebook} /></Link>
        <Link to={`https://x.com/${configurations?.["X username"]}`} className="social-icon"><FontAwesomeIcon icon={faTwitter} /></Link>
        <Link to={`https://instagram.com/${configurations?.["instagram username"]}`} className="social-icon"><FontAwesomeIcon icon={faInstagram} /></Link>
        <Link to={`https://dribbble.com/${configurations?.["dribbble username"]}`} className="social-icon"><FontAwesomeIcon icon={faDribbble} /></Link>
        <Link to={`${configurations?.["whatsApp api"]}`} className="social-icon"><FontAwesomeIcon icon={faWhatsapp} /></Link>
        <Link to={`https://linkedin.com/in/${configurations?.["linkedin username"]}`} className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></Link>
      </div>
      )}
      
    </div>

    {/* Contacts */}
    <div>
      <h1 className="text-xl font-bold gradient-text underline">Contacts</h1>
      <ul className="mt-4 space-y-2">
        <li>
          <p>Phone:</p>
          <h6 className="gradient-text">{configurations?.["footer phone1"]}</h6>
          <h6 className="gradient-text">{configurations?.["footer phone2"]}</h6>
        </li>
        <li>
          <p>Email:</p>
          <h6 className="gradient-text">{configurations?.["footer email1"]}</h6>
          <h6 className="gradient-text">{configurations?.["footer email2"]}</h6>
        </li>
      </ul>
    </div>

    {/* Useful Links */}
    <div>
      <h1 className="text-xl font-bold gradient-text underline">Useful Links</h1>
      <ul className="mt-4 space-y-2">
        <li><Link to="/home/about" className="nav-item">About</Link></li>
        <li><Link to="/home/services" className="nav-item">Services</Link></li>
        <li><Link to="/home/features" className="nav-item">Features</Link></li>
        <li><Link to="/home/contact" className="nav-item">Contact</Link></li>
        <li><Link to="/home/team" className="nav-item">Professional team</Link></li>
        <li><Link to="/home/portfolio" className="nav-item">Portfolio</Link></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h1 className="text-xl font-bold gradient-text">{configurations?.["subscribe content"]}</h1>
      <form className="mt-4 flex">
        <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-gray-800 text-white border-none rounded-l-lg focus:outline-none"/>
        <button type="submit" className="bg-green-500 px-4 py-2 rounded-r-lg hover:bg-green-600">
        <FontAwesomeIcon icon={faPaperPlane} /></button>
      </form>
    </div>

    {/* Copyright Section (Centered) */}
    <div className="col-span-1 sm:col-span-2 md:col-span-4 text-center mt-8 text-sm">
      <p>Copyright &copy; {currentDate} All rights reserved | 
        <Link to="https://emndex.online" target="_blank" className="text-green-400 hover:underline"> Emndex Tech Services Ltd</Link> |
        Developed by Emndex Tech Team
      </p>
    </div>

  </div>
</footer>

    </div>
  );
}

export default AppFooter;
