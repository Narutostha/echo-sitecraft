
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import { useCart } from "../contexts/CartContext";
import { Minus, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const handleAddItem = (itemId: string) => {
    const item = state.items.find((i) => i.id === itemId);
    if (item) {
      dispatch({ type: "ADD_ITEM", payload: item });
    }
  };

  const handleReduceItem = (itemId: string) => {
    dispatch({ type: "REDUCE_QUANTITY", payload: itemId });
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  return (
    <div className="min-h-screen bg-[#FCF7F5] relative">
      <Sidebar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-start pt-24 px-4 md:px-8 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-['Halvar_Breit'] uppercase tracking-wider mb-8">
          CART
        </h1>

        {state.items.length === 0 ? (
          <div className="text-center">
            <p className="text-lg font-['Halvar_Breit'] uppercase tracking-wide text-gray-600 mb-6">
              YOUR CART IS EMPTY
            </p>
            <button
              onClick={() => navigate('/shop')}
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <div className="w-full">
            {state.items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between border-b border-gray-200 py-4"
              >
                <div className="flex items-center gap-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  )}
                  <div>
                    <h3 className="font-['Halvar_Breit'] text-lg">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleReduceItem(item.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleAddItem(item.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}

            <div className="mt-8 flex flex-col items-end">
              <p className="text-xl font-['Halvar_Breit'] mb-4">
                Total: ${state.total.toFixed(2)}
              </p>
              <button
                className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
                onClick={() => navigate('/checkout')}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Social Icons */}
      <div className="fixed bottom-8 right-8 flex gap-4">
        <a href="#" className="text-black hover:text-gray-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7627 7 17.001 9.2387 17.001 12C17.001 14.7613 14.7627 17 12.001 17C9.23926 17 7.00098 14.7613 7.00098 12C7.00098 9.2387 9.23926 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99915 17.251 7.99915C16.5609 7.99915 16.001 7.43926 16.001 6.74915C16.001 6.05905 16.5609 5.49915 17.251 5.49915C17.9402 5.49915 18.501 6.05905 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00658 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.38905 6.17383C4.19994 6.66332 4.09461 7.18811 4.05789 7.97115C4.00592 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00756 14.8778 4.05877 16.0287C4.09558 16.8128 4.20105 17.3384 4.39064 17.8268C4.55897 18.2608 4.75995 18.5739 5.09352 18.9074C5.42837 19.2423 5.74061 19.4429 6.17481 19.6119C6.66429 19.801 7.18908 19.9064 7.97212 19.9431C9.07618 19.9951 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0297 19.9422C16.8138 19.9054 17.3394 19.7999 17.8278 19.6103C18.2618 19.442 18.5749 19.241 18.9084 18.9074C19.2433 18.5726 19.4439 18.2604 19.6129 17.8262C19.802 17.3367 19.9074 16.8119 19.9441 16.0288C19.9961 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97131C19.9064 7.18719 19.8009 6.66156 19.6113 6.17319C19.443 5.73919 19.242 5.42612 18.9084 5.09255C18.5736 4.7577 18.2614 4.55708 17.8272 4.38809C17.3377 4.19898 16.8129 4.09365 16.0299 4.05693C14.9258 4.00496 14.54 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7235 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7235 17.9133 21.476 18.55C21.2218 19.2092 20.8785 19.7658 20.3226 20.3217C19.7668 20.8767 19.2085 21.22 18.551 21.475C17.9143 21.7225 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08764 21.7225 5.45098 21.475C4.79181 21.2208 4.23514 20.8775 3.67931 20.3217C3.12348 19.7658 2.78014 19.2075 2.52514 18.55C2.27764 17.9133 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8133 2.27848 6.08667 2.52598 5.45C2.78014 4.79083 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.77917 5.45098 2.525C6.08764 2.2775 6.81431 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"/>
          </svg>
        </a>
        <a href="#" className="text-black hover:text-gray-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"/>
          </svg>
        </a>
        <a href="#" className="text-black hover:text-gray-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.001 7.50006V16.5001C20.001 18.4331 18.434 20.0001 16.501 20.0001H7.50098C5.56798 20.0001 4.00098 18.4331 4.00098 16.5001V7.50006C4.00098 5.56706 5.56798 4.00006 7.50098 4.00006H16.501C18.434 4.00006 20.001 5.56706 20.001 7.50006ZM9.00098 12.0001C9.00098 13.6571 10.344 15.0001 12.001 15.0001C13.658 15.0001 15.001 13.6571 15.001 12.0001C15.001 10.3431 13.658 9.00006 12.001 9.00006C10.344 9.00006 9.00098 10.3431 9.00098 12.0001ZM7.00098 12.0001C7.00098 9.23906 9.23998 7.00006 12.001 7.00006C14.762 7.00006 17.001 9.23906 17.001 12.0001C17.001 14.7611 14.762 17.0001 12.001 17.0001C9.23998 17.0001 7.00098 14.7611 7.00098 12.0001ZM16.501 8.00006C15.9488 8.00006 15.501 7.55228 15.501 7.00006C15.501 6.44784 15.9488 6.00006 16.501 6.00006C17.0532 6.00006 17.501 6.44784 17.501 7.00006C17.501 7.55228 17.0532 8.00006 16.501 8.00006Z"/>
          </svg>
        </a>
        <a href="#" className="text-black hover:text-gray-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Cart;
