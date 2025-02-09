
import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Cart from "../components/Cart";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SizeGuide = () => {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const convertToImperial = (cm: number | string) => {
    if (typeof cm === "string" && cm === "-") return "-";
    const inches = (Number(cm) * 0.393701).toFixed(1);
    return inches;
  };

  const clothingTypes = [
    {
      name: "HOODIE",
      image: "/lovable-uploads/f28aa2dd-8b13-4a67-93fa-878e5fc802e4.png",
      measurements: [
        { name: "A LENGTH FROM HSP", unit: "cm", sizes: { XXS: 59, XS: 61, S: 63, M: 65, L: 67, XL: 69, XXL: 71, XXXL: 73 } },
        { name: "B 1/2 UNDERARM CHEST", unit: "cm", sizes: { XXS: 62, XS: 64, S: 66, M: 68, L: 70, XL: 72, XXL: 74, XXXL: 76 } },
        { name: "C 1/2 HEM", unit: "cm", sizes: { XXS: 46, XS: 48, S: 50, M: 52, L: 54, XL: 56, XXL: 58, XXXL: 60 } },
        { name: "D SLEEVE LENGTH", unit: "cm", sizes: { XXS: 51, XS: 52.5, S: 54, M: 55.5, L: 57, XL: 58.5, XXL: 60, XXXL: 61.5 } }
      ]
    },
    {
      name: "ZIP-UPS",
      image: "/lovable-uploads/ff77a521-3d1d-48f3-a1dc-7aac803f9296.png",
      measurements: [
        { name: "A LENGTH FROM HSP", unit: "cm", sizes: { XXS: 59, XS: 61, S: 63, M: 65, L: 67, XL: 69, XXL: 71, XXXL: 73 } },
        { name: "B 1/2 UNDERARM CHEST", unit: "cm", sizes: { XXS: 62, XS: 64, S: 66, M: 68, L: 70, XL: 72, XXL: 74, XXXL: 76 } },
        { name: "C 1/2 HEM", unit: "cm", sizes: { XXS: 46, XS: 48, S: 50, M: 52, L: 54, XL: 56, XXL: 58, XXXL: 60 } },
        { name: "D SLEEVE LENGTH", unit: "cm", sizes: { XXS: 51, XS: 52.5, S: 54, M: 55.5, L: 57, XL: 58.5, XXL: 60, XXXL: 61.5 } }
      ]
    },
    {
      name: "STRAIGHT-LEG SWEATPANTS",
      image: "/lovable-uploads/be1e00ad-93a9-4cec-86d7-12f48dc91dc7.png",
      measurements: [
        { name: "A 1/2 WAIST", unit: "cm", sizes: { XXS: "-", XS: 30, S: 32, M: 34, L: 36, XL: 38, XXL: 40, XXXL: "-" } },
        { name: "B 1/2 HEM", unit: "cm", sizes: { XXS: "-", XS: 25.4, S: 26.4, M: 27.4, L: 28.2, XL: 29, XXL: 29.8, XXXL: "-" } },
        { name: "C LENGTH", unit: "cm", sizes: { XXS: "-", XS: 101, S: 103, M: 105, L: 107, XL: 109, XXL: 111, XXXL: "-" } }
      ]
    },
    {
      name: "CUFFED SWEATPANTS",
      image: "/lovable-uploads/be1e00ad-93a9-4cec-86d7-12f48dc91dc7.png",
      measurements: [
        { name: "A 1/2 WAIST", unit: "cm", sizes: { XXS: "-", XS: 30, S: 32, M: 34, L: 36, XL: 38, XXL: 40, XXXL: "-" } },
        { name: "B 1/2 HEM", unit: "cm", sizes: { XXS: "-", XS: 25.4, S: 26.4, M: 27.4, L: 28.2, XL: 29, XXL: 29.8, XXXL: "-" } },
        { name: "C LENGTH", unit: "cm", sizes: { XXS: "-", XS: 101, S: 103, M: 105, L: 107, XL: 109, XXL: 111, XXXL: "-" } }
      ]
    }
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
        <h1 className="text-4xl font-light mb-8 text-[#868686]">SIZE GUIDE</h1>
        
        <div className="mb-8">
          <Button
            variant={unit === "metric" ? "default" : "outline"}
            onClick={() => setUnit("metric")}
            className="rounded-r-none"
          >
            METRIC
          </Button>
          <Button
            variant={unit === "imperial" ? "default" : "outline"}
            onClick={() => setUnit("imperial")}
            className="rounded-l-none"
          >
            IMPERIAL
          </Button>
        </div>

        <Tabs defaultValue={clothingTypes[0].name.toLowerCase()} className="w-full">
          <TabsList className="w-full justify-start mb-8">
            {clothingTypes.map((type) => (
              <TabsTrigger 
                key={type.name} 
                value={type.name.toLowerCase()}
                className="text-[#868686]"
              >
                {type.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {clothingTypes.map((type) => (
            <TabsContent key={type.name} value={type.name.toLowerCase()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <img 
                    src={type.image} 
                    alt={`${type.name} measurements diagram`}
                    className="w-full"
                  />
                </div>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-[#868686]">SIZES</TableHead>
                        <TableHead className="text-[#868686]">XXS</TableHead>
                        <TableHead className="text-[#868686]">XS</TableHead>
                        <TableHead className="text-[#868686]">S</TableHead>
                        <TableHead className="text-[#868686]">M</TableHead>
                        <TableHead className="text-[#868686]">L</TableHead>
                        <TableHead className="text-[#868686]">XL</TableHead>
                        <TableHead className="text-[#868686]">XXL</TableHead>
                        <TableHead className="text-[#868686]">XXXL</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {type.measurements.map((measurement) => (
                        <TableRow key={measurement.name}>
                          <TableCell className="font-medium text-[#868686]">
                            {measurement.name} ({unit === "metric" ? "CM" : "IN"})
                          </TableCell>
                          {Object.values(measurement.sizes).map((value, index) => (
                            <TableCell key={index} className="text-[#868686]">
                              {unit === "metric" ? value : convertToImperial(value)}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
};

export default SizeGuide;
