import { useState } from "react";
import { Link, useLocation } from "react-router"; // useLocation for active route detection
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useConfig } from "../Profiders/ConfigProvider";

const navItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/home/about" },
  { name: "Services", path: "/home/services" },
  { name: "Features", path: "/home/features" },
  { name: "Portfolio", path: "/home/portfolio" },
  { name: "Contact", path: "/home/contact" },
];

function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current path
  const { configurations } = useConfig();
  const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0a0a32] bg-opacity-90 shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}

      {configurations?.['system logo'] &&(
        <Link to="/" className="text-3xl font-bold text-white neon-text">
        <img src={`${configUrl}/${configurations?.['system logo']}`} alt="" width={140} height={40} />
        </Link>
      )
      }
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`relative text-white text-lg font-medium neon-button px-4 py-1 transition duration-300 ${
                  isActive
                    ? "active-item-glow" // Add glow effect when active
                    : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Social Media Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="#" className="text-white text-xl hover:text-blue-400">
            <i className="fa fa-facebook"></i>
          </Link>
          <Link to="#" className="text-white text-xl hover:text-blue-300">
            <i className="fa fa-twitter"></i>
          </Link>
          <Link to="#" className="text-white text-xl hover:text-pink-500">
            <i className="fa fa-instagram"></i>
          </Link>
          <Link to="#" className="text-white text-xl hover:text-red-400">
            <i className="fa fa-dribbble"></i>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a32] shadow-md py-6"
          >
            <div className="flex flex-col items-center space-y-4">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`text-white text-lg font-medium py-2 ${
                      isActive ? "shadow-lg shadow-pink-500/50 neon-glow" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default AppHeader;
