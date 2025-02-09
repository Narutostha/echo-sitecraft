
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-8 right-8 z-50"
    >
      <button 
        onClick={() => navigate('/cart')}
        className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default Cart;
