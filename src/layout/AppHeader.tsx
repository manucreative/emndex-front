import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/home/about" },
  { name: "Services", path: "/home/services" },
  { name: "Features", path: "/home/features" },
  { name: "Contact", path: "/home/contact" },
];

function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0a0a32] bg-opacity-90 shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white neon-text">
          EMNDEX
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative text-white text-lg font-medium neon-button px-4 py-1 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="#" className="text-white text-xl hover:text-blue-400"><i className="fa fa-facebook"></i></Link>
          <Link to="#" className="text-white text-xl hover:text-blue-300"><i className="fa fa-twitter"></i></Link>
          <Link to="#" className="text-white text-xl hover:text-pink-500"><i className="fa fa-instagram"></i></Link>
          <Link to="#" className="text-white text-xl hover:text-red-400"><i className="fa fa-dribbble"></i></Link>
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
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-white text-lg font-medium py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default AppHeader;

