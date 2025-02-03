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
        {/* Full-screen video background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/8faa6f1698b144f5aa774c523376f52a.mov"
              type="video/mp4"
            />
          </video>
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