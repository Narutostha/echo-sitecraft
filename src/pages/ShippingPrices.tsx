
import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Cart from "../components/Cart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShippingPrices = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const countries = [
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Netherlands",
    "Belgium",
  ];

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
        <h1 className="text-4xl font-light mb-12 text-[#868686]">SHIPPING PRICES</h1>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <Select onValueChange={setSelectedCountry} value={selectedCountry}>
            <SelectTrigger className="w-full text-[#868686] bg-transparent border-[#868686]">
              <SelectValue placeholder="SELECT COUNTRY" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="space-y-4 text-[#868686] text-lg">
            <p className="uppercase">
              THE COST TO SHIP ONE HOODIE - £5.00
            </p>
            <p className="uppercase">
              THE COST TO SHIP ONE T-SHIRT - £5.00
            </p>
            <p className="uppercase font-medium">
              ORDERS WITH A TOTAL VALUE OF OVER £105.00 - FREE SHIPPING
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShippingPrices;
