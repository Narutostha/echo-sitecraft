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
      className="fixed left-0 top-0 h-full w-64 bg-transparent backdrop-blur-sm p-8 z-50"
    >
      <Link to="/" className="block mb-16">
        <img
          src="/lovable-uploads/24889cd0-3147-4b61-a0e3-e6256f595c0d.png"
          alt="Logo"
          className="w-12 h-12 object-contain hover:opacity-80 transition-opacity"
        />
      </Link>
      
      <div className="space-y-8">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="block text-[#FBF7F5] hover:text-yellow-400 transition-colors duration-200 text-[16px] font-['HalvarBreit'] tracking-[0.3em] uppercase"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Sidebar;