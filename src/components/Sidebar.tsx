
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: "PRODUCTS", path: "/products" },
    { label: "SIGN UP", path: "/signup" },
    { label: "SIZE GUIDE", path: "/size-guide" },
    { label: "SUSTAINABILITY", path: "/sustainability" },
    { label: "FOUNDATION", path: "/foundation" },
    { label: "TERMS", path: "/terms" },
    { label: "SHIPPING PRICES", path: "/shipping" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        <Menu className="h-6 w-6 text-[#868686]" />
      </button>

      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1
        }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 top-0 h-full w-64 bg-transparent p-8 z-40 flex flex-col
                   ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                   md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex-none w-full flex justify-center">
          <Link to="/" className="block mb-8">
            <img
              src="/lovable-uploads/24889cd0-3147-4b61-a0e3-e6256f595c0d.png"
              alt="Logo"
              className="w-12 h-12 object-contain hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
        
        <div className="flex-1">
          <div 
            className="space-y-8"
            style={{ 
              marginTop: '30vh', 
              marginLeft: '20%',
              transform: 'translateX(0)'
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block text-[#868686] text-left no-underline uppercase text-base font-bold 
                         leading-[1.475rem] tracking-[0.0094rem] cursor-pointer pl-4
                         transition-colors duration-250 ease-in-out
                         hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Sidebar;
