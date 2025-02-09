
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Sidebar from "../components/Sidebar";
import Cart from "../components/Cart";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string[];
  sizes: string[];
  color: string;
}

const products: { [key: string]: Product } = {
  "puffer-jacket": {
    id: "puffer-jacket",
    name: "PUFFER JACKET",
    price: 185.00,
    image: "/lovable-uploads/cfefd328-0bcf-4b27-a6c9-fa9c6b1cb3d9.png",
    color: "SKY BLUE",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    description: [
      "100% RECYCLED NYLON FABRIC",
      "SYNTHETIC DOWN - VERY WARM",
      "3D SUN DOME EMBROIDERY PATCHES",
      "BROKEN PLANET EMBROIDERY",
      "WAIST AND NECK ADJUSTERS",
      "INNER POCKET",
      "FITS TRUE TO SIZE. WE RECOMMEND GETTING YOUR USUAL SIZE.",
      "THE MALE MODEL IS 6'0, WEARING SIZE LARGE. THE FEMALE MODEL IS 5'6, WEARING SIZE MEDIUM.",
      "IMPORTANT: IT WILL TAKE FROM 2 TO 4 WORKING DAYS TO SHIP THIS ITEM.",
      "ORDERS OUTSIDE THE UK: TAXES AND DUTIES INCLUDED IN THE FINAL PRICE - NO EXTRA CUSTOMS FEES WILL NEED TO BE PAID.",
      "FREE UK SHIPPING OVER £105.00, EUROPE & USA - £225.00, REST OF THE WORLD - £350.00."
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  
  const product = products[id || ""];
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
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
        className="max-w-7xl mx-auto pt-24 px-8"
      >
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#868686] mb-8 hover:text-black transition-colors"
        >
          <ArrowLeft size={20} />
          BACK
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-4xl font-light text-[#868686]">{product.name}</h1>
              <span className="text-2xl text-[#868686]">£{product.price.toFixed(2)}</span>
            </div>

            <div className="mb-8">
              <h3 className="text-sm text-[#868686] mb-2">COLOR: {product.color}</h3>
              <div className="w-8 h-8 rounded-full bg-[#33C3F0] border-2 border-white shadow-md"></div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm text-[#868686] mb-4">SIZE</h3>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className="min-w-[48px]"
                  >
                    {size}
                  </Button>
                ))}
              </div>
              <button className="text-sm text-[#868686] underline mt-4">SIZE GUIDE</button>
            </div>

            <Button
              onClick={handleAddToCart}
              className="w-full bg-[#868686] hover:bg-[#666666] text-white mb-8"
            >
              ADD TO CART
            </Button>

            <div className="space-y-2">
              {product.description.map((desc, index) => (
                <p key={index} className="text-sm text-[#868686]">{desc}</p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetail;
