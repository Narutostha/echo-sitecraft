
import { motion } from "framer-motion";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Sidebar from "../components/Sidebar";
import Cart from "../components/Cart";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes: string[];
}

const products: Product[] = [
  {
    id: "puffer-jacket",
    name: "PUFFER JACKET",
    price: 185.00,
    image: "/lovable-uploads/cfefd328-0bcf-4b27-a6c9-fa9c6b1cb3d9.png",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: "polar-fleece",
    name: "POLAR FLEECE",
    price: 110.00,
    image: "/lovable-uploads/cfefd328-0bcf-4b27-a6c9-fa9c6b1cb3d9.png",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: "crest-tshirt",
    name: "CREST T-SHIRT",
    price: 35.00,
    image: "/lovable-uploads/cfefd328-0bcf-4b27-a6c9-fa9c6b1cb3d9.png",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
];

const Shop = () => {
  const { dispatch } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});

  const handleAddToCart = (product: Product) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: `${product.id}-${selectedSize}`,
        name: `${product.name} (${selectedSize})`,
        price: product.price,
        quantity: 1,
        image: product.image,
      },
    });
    toast.success("Added to cart");
  };

  return (
    <div className="min-h-screen bg-shop">
      <Sidebar />
      <Cart />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto p-8"
      >
        <h1 className="text-4xl font-light mb-12 text-[#868686]">Our Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-full aspect-square mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-lg font-medium text-[#868686] mb-2">{product.name}</h3>
              <p className="text-[#868686] mb-4">£{product.price.toFixed(2)}</p>
              
              <div className="flex gap-2 flex-wrap justify-center mb-4">
                {product.sizes.map((size) => (
                  <Button
                    key={`${product.id}-${size}`}
                    variant={selectedSizes[product.id] === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSizes({
                      ...selectedSizes,
                      [product.id]: size,
                    })}
                    className="min-w-[40px]"
                  >
                    {size}
                  </Button>
                ))}
              </div>

              <Button
                onClick={() => handleAddToCart(product)}
                variant="outline"
                className="w-full max-w-[200px] text-[#868686] border-[#868686] hover:bg-[#868686] hover:text-white"
              >
                Add to Cart
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Shop;
