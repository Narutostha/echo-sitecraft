import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Cart from "../components/Cart";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Sidebar />
      <Cart />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen"
      >
        {/* Full-screen background image */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/24889cd0-3147-4b61-a0e3-e6256f595c0d.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Darker overlay */}
        </div>
        
        {/* Hero content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6"
        >
          <h1 className="text-8xl md:text-9xl font-extralight tracking-[0.2em] text-center">
            SHOP
          </h1>
          <p className="text-lg md:text-xl tracking-widest opacity-80">
            URBAN STREETWEAR COLLECTION
          </p>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Index;