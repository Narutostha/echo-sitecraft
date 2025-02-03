import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Cart from "../components/Cart";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary relative overflow-hidden">
      <Sidebar />
      <Cart />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-screen"
      >
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/24889cd0-3147-4b61-a0e3-e6256f595c0d.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-white text-8xl font-light tracking-wider">
            SHOP
          </h1>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Index;