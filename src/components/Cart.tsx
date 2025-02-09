
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { state } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-8 right-8 z-50"
    >
      <button 
        onClick={() => navigate('/cart')}
        className="relative text-black hover:text-gray-600 transition-colors"
      >
        <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {state.items.reduce((total, item) => total + item.quantity, 0)}
        </span>
        CART
      </button>
    </motion.div>
  );
};

export default Cart;
