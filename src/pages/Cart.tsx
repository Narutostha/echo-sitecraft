
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";

const Cart = () => {
  // Mock cart data - in a real app, this would come from your cart state management
  const cartItems = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 29.99,
      quantity: 1,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Black Denim Jeans",
      price: 89.99,
      quantity: 1,
      image: "/placeholder.svg"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-shop relative">
      <Sidebar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-8 md:py-16"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Shopping Cart</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6">
                Proceed to Checkout
              </Button>
              <Link to="/shop">
                <Button variant="outline" className="w-full mt-2">
                  Continue Shopping
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;
