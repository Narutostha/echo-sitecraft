import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
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
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-full w-64 bg-transparent backdrop-blur-sm p-8 z-50 flex flex-col"
    >
      <div className="flex-none">
        <Link to="/" className="block mb-8 mt-4">
          <img
            src="/lovable-uploads/24889cd0-3147-4b61-a0e3-e6256f595c0d.png"
            alt="Logo"
            className="w-12 h-12 object-contain hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>
      
      <div className="flex-1 mt-24">
        <div className="space-y-8 pl-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="block text-[#FBF7F5] text-left no-underline uppercase text-base font-bold 
                       leading-[1.475rem] tracking-[0.0094rem] cursor-pointer pl-4
                       transition-colors duration-250 ease-in-out
                       hover:text-yellow-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Sidebar;