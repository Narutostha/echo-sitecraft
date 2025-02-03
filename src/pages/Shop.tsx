import { motion } from "framer-motion";

const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-light mb-8">Our Collection</h1>
        {/* Shop content will go here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <p className="text-gray-500">Products coming soon...</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Shop;