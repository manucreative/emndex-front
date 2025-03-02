import { useEffect, useState } from "react";
import { Link } from "react-router";

function AppFooter() {
  const [currentDate, setCurrentDate] = useState(2025);

  useEffect(() => {
    setCurrentDate(new Date().getFullYear());
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <section 
  className="relative bg-cover bg-center py-16 text-center text-white z-0 h-[400px] " 
        style={{ backgroundImage: `url('/assets/img/footer-banner.jpg')` }}>
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-bold gradient-text">Emndex Solution Ltd</h1>
          <h4 className=" text-3xl mt-2">Trust us with your Project</h4>
          <hr className="neon-gradient-line mx-auto sm:w-1/4" />
          <a href="#" className="neon-border-button inline-block px-6 py-2 mt-10">Request a Quote</a>
        </div>
      </section>

      {/* Footer Section */}
      <footer 
  className="relative min-h-[400px] flex flex-col justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#18041e] to-[rgb(42,3,68)] text-white overflow-hidden px-4"
>
  <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
    
    {/* Company Info */}
    <div>
      <h1 className="text-3xl font-bold gradient-text">EMNDEX</h1>
      <p className="mt-4">Having a project? Follow us and request a quote now, we are ready to bring your dream project to life.</p>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="social-icon"><i className="fa fa-facebook"></i></a>
        <a href="#" className="social-icon"><i className="fa fa-twitter"></i></a>
        <a href="#" className="social-icon"><i className="fa fa-instagram"></i></a>
        <a href="#" className="social-icon"><i className="fa fa-dribbble"></i></a>
      </div>
    </div>

    {/* Contacts */}
    <div>
      <h1 className="text-xl font-bold gradient-text underline">Contacts</h1>
      <ul className="mt-4 space-y-2">
        <li>
          <p>Phone:</p>
          <h6 className="gradient-text">+254745369555</h6>
          <h6 className="gradient-text">+25421827214</h6>
        </li>
        <li>
          <p>Email:</p>
          <h6 className="gradient-text">info@emndex.com</h6>
          <h6 className="gradient-text">support@emndex.com</h6>
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
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h1 className="text-xl font-bold gradient-text">Subscribe to Stay Updated</h1>
      <form className="mt-4 flex">
        <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-gray-800 text-white border-none rounded-l-lg focus:outline-none"/>
        <button type="submit" className="bg-green-500 px-4 py-2 rounded-r-lg hover:bg-green-600"><i className="fa fa-send-o"></i></button>
      </form>
    </div>

    {/* Copyright Section (Centered) */}
    <div className="col-span-1 sm:col-span-2 md:col-span-4 text-center mt-8 text-sm">
      <p>Copyright &copy; {new Date().getFullYear()} All rights reserved | 
        <Link to="#" target="_blank" className="text-green-400 hover:underline"> Emndex Solution Ltd</Link> |
        Developed by Emmanuel Kirui
      </p>
    </div>

  </div>
</footer>

    </div>
  );
}

export default AppFooter;
